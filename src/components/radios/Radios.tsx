import React, { HTMLProps, PureComponent } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import { RadiosContext, IRadiosContext } from './RadioContext';
import FormGroup from '../../util/FormGroup';
import Divider from './components/Divider';
import Radio from './components/Radio';
import { generateRandomName } from '../../util/RandomID';

interface RadiosProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  inline?: boolean;
  idPrefix?: string;
}

type RadiosState = {
  conditionalRadios: Array<string>;
  selectedRadio: string;
};

class Radios extends PureComponent<RadiosProps, RadiosState> {
  static Divider = Divider;

  static Radio = Radio;

  private radioCount: number = 0;

  private radioReferences: Array<string> = [];

  private radioIds: Record<string, string> = {};

  static defaultProps = {
    role: 'radiogroup',
  };

  constructor(props: RadiosProps) {
    super(props);
    this.state = {
      conditionalRadios: [],
      selectedRadio: '',
    };
  }

  getRadioId = (id: string, reference: string): string => {
    const { idPrefix } = this.props;
    if (reference in this.radioIds) {
      return this.radioIds[reference];
    }
    this.radioCount += 1;
    this.radioIds[reference] = `${idPrefix || id}-${this.radioCount}`;
    return this.radioIds[reference];
  };

  leaseReference = (): string => {
    const reference = generateRandomName();
    if (this.radioReferences.includes(reference)) {
      return this.leaseReference();
    }
    this.radioReferences.push(reference);
    return reference;
  };

  unleaseReference = (reference: string) => {
    this.radioReferences = this.radioReferences.filter(ref => ref !== reference);
  };

  setConditional = (radioReference: string, hasConditional: boolean) => {
    this.setState(state => {
      const currentHasConditional = state.conditionalRadios.includes(radioReference);
      if (currentHasConditional && hasConditional === false) {
        return {
          ...state,
          conditionalRadios: state.conditionalRadios.filter(ref => ref !== radioReference),
        };
      }
      if (!currentHasConditional && hasConditional === true) {
        return {
          ...state,
          conditionalRadios: [...state.conditionalRadios, radioReference],
        };
      }
      return state;
    });
  };

  setSelected = (radioReference: string) => {
    this.setState({
      selectedRadio: radioReference,
    });
  };

  resetRadioIds = () => {
    this.radioCount = 0;
    this.radioIds = {};
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <FormGroup<RadiosProps> inputType="radios" {...rest}>
        {({ className, inline, name, id, error, ...restRenderProps }) => {
          this.resetRadioIds();
          const contextValue: IRadiosContext = {
            getRadioId: reference => this.getRadioId(id, reference),
            selectedRadio: this.state.selectedRadio,
            setConditional: this.setConditional,
            setSelected: this.setSelected,
            leaseReference: this.leaseReference,
            unleaseReference: this.unleaseReference,
            name,
          };
          const containsConditional = this.state.conditionalRadios.length > 0;
          return (
            <div
              className={classNames(
                'nhsuk-radios',
                { 'nhsuk-radios--inline': inline },
                { 'nhsuk-radios--conditional': containsConditional },
                className,
              )}
              id={id}
              {...restRenderProps}
            >
              <RadiosContext.Provider value={contextValue}>{children}</RadiosContext.Provider>
            </div>
          );
        }}
      </FormGroup>
    );
  }
}

export default Radios;
