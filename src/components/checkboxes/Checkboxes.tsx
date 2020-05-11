import React, { HTMLProps, PureComponent, SyntheticEvent } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import LabelBlock from '../../util/LabelBlock';
import { generateRandomName } from '../../util/RandomName';
import FormContext from '../form/FormContext';
import CheckboxContext from './CheckboxContext';
import Box, { BoxProps } from './Box';

interface CheckboxesEvent extends SyntheticEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface CheckboxesProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  idPrefix?: string;
  onChange?: (e: CheckboxesEvent) => any;
}

interface CheckboxesState {
  name: string;
}

interface Checkboxes {
  boxCount: number;
}

class Checkboxes extends PureComponent<CheckboxesProps, CheckboxesState> {
  constructor(props: CheckboxesProps, ...rest: any[]) {
    super(props, ...rest);
    this.state = {
      name: props.name || generateRandomName('checkbox'),
    };
    this.boxCount = 0;
  }

  getBoxId = (): string | undefined => {
    const { idPrefix } = this.props;
    const { name } = this.state;
    if (!name && !idPrefix) {
      return undefined;
    }
    this.boxCount += 1;
    return `${idPrefix || name}-${this.boxCount}`;
  };

  static contextType = FormContext;

  static Box: React.FC<BoxProps> = Box;

  render() {
    const {
      error,
      className,
      id,
      children,
      idPrefix,
      label,
      labelProps,
      errorProps,
      hint,
      hintProps,
      ...rest
    } = this.props;
    const { name } = this.state;
    const { isForm, setError } = this.context;

    if (isForm) {
      setError(name, Boolean(error));
    }

    return (
      <>
        <LabelBlock
          elementId={id}
          label={label}
          labelProps={labelProps}
          error={error}
          errorProps={errorProps}
          hint={hint}
          hintProps={hintProps}
        />
        <CheckboxContext.Provider value={{ isCheckbox: true, name, getBoxId: this.getBoxId }}>
          <div
            className={classNames('nhsuk-checkboxes', className)}
            id={id}
            aria-describedby={hint ? `${id}--hint` : undefined}
            {...rest}
          >
            {children}
          </div>
        </CheckboxContext.Provider>
      </>
    );
  }
}

export default Checkboxes;
