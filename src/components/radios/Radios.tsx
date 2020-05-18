import React, { HTMLProps, PureComponent } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import { RadiosContext } from './RadioContext';
import FormGroup from '../../util/FormGroup';
import Divider from './components/Divider';
import Radio from './components/Radio';
import { generateRandomName } from '../../util/RandomID';

interface RadiosProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  inline?: boolean;
}

type RadiosState = {
  conditionalRadios: Array<string>;
  selectedRadio: string;
};

class Radios extends PureComponent<RadiosProps, RadiosState> {
  private radioCount: number = 0;

  private radioReferences: Array<string> = [];

  static defaultProps = {
    role: 'radiogroup',
  };

  constructor(props: RadiosProps, ...rest: any[]) {
    super(props, ...rest);
    this.state = {
      conditionalRadios: [],
      selectedRadio: '',
    };
  }

  getRadioId = (id: string): string => {
    this.radioCount += 1;
    return `${id}-${this.radioCount}`;
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

  static Divider = Divider;

  static Radio = Radio;

  render() {
    const { children, ...rest } = this.props;
    return (
      <FormGroup<RadiosProps> inputType="radios" {...rest}>
        {({ className, inline, name, id, error, ...restRenderProps }) => {
          this.radioCount = 0;
          const contextValue = {
            getRadioId: () => this.getRadioId(id),
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
