import CheckboxContext, { ICheckboxContext } from './CheckboxContext';
import React, { HTMLProps, PureComponent, useContext } from 'react';

import Box from './components/Box';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';
import FormGroupContext from '../formgroup/FormGroupContext';
import classNames from 'classnames';
import { generateRandomName } from '../../util/RandomID';

interface CheckboxesProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  idPrefix?: string;
}

type CheckboxesState = {
  conditionalBoxes: Array<string>;
};

class Checkboxes extends PureComponent<CheckboxesProps, CheckboxesState> {
  private boxCount: number = 0;

  private boxReferences: Array<string> = [];

  private boxIds: Record<string, string> = {};

  constructor(props: CheckboxesProps) {
    super(props);
    this.state = {
      conditionalBoxes: [],
    };
  }

  leaseReference = (): string => {
    const reference = generateRandomName();
    if (this.boxReferences.includes(reference)) {
      return this.leaseReference();
    }
    this.boxReferences.push(reference);
    return reference;
  };

  unleaseReference = (reference: string) => {
    this.boxReferences = this.boxReferences.filter(ref => ref !== reference);
  };

  setConditional = (boxReference: string, hasConditional: boolean) => {
    this.setState(state => {
      const currentHasConditional = state.conditionalBoxes.includes(boxReference);
      if (currentHasConditional && hasConditional === false) {
        return {
          ...state,
          conditionalBoxes: state.conditionalBoxes.filter(ref => ref !== boxReference),
        };
      }
      if (!currentHasConditional && hasConditional === true) {
        return {
          ...state,
          conditionalBoxes: [...state.conditionalBoxes, boxReference],
        };
      }
      return state;
    });
  };

  getBoxId = (id: string, reference: string): string => {
    const { idPrefix } = this.props;
    if (reference in this.boxIds) {
      return this.boxIds[reference];
    }
    this.boxCount += 1;
    this.boxIds[reference] = `${idPrefix || id}-${this.boxCount}`;
    return this.boxIds[reference];
  };

  resetBoxIds = () => {
    this.boxCount = 0;
    this.boxIds = {};
  };

  static Box = Box;

  render() {
    const { children, ...rest } = this.props;
    const { isInFormGroup } = useContext(FormGroupContext);
    if (isInFormGroup) {
      return (
        {
          // TODO: this
        }
      );
    }
    return (
      <FormGroup<CheckboxesProps> inputType="checkboxes" {...rest}>
        {({ className, name, id, idPrefix, ...restRenderProps }) => {
          this.resetBoxIds();
          const containsConditional = this.state.conditionalBoxes.length > 0;
          const contextValue: ICheckboxContext = {
            name,
            getBoxId: reference => this.getBoxId(id, reference),
            setConditional: this.setConditional,
            leaseReference: this.leaseReference,
            unleaseReference: this.unleaseReference,
          };
          return (
            <div
              className={classNames(
                'nhsuk-checkboxes',
                { 'nhsuk-checkboxes--conditional': containsConditional },
                className,
              )}
              id={id}
              {...restRenderProps}
            >
              <CheckboxContext.Provider value={contextValue}>{children}</CheckboxContext.Provider>
            </div>
          );
        }}
      </FormGroup>
    );
  }
}

export default Checkboxes;
