import React, { HTMLProps, PureComponent, SyntheticEvent } from 'react';
import classNames from 'classnames';
import FormContext from '../form/FormContext';
import ErrorMessage from '../error-message';
import CheckboxContext from './CheckboxContext';
import Box, { BoxProps } from './Box';

interface CheckboxesEvent extends SyntheticEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface CheckboxesProps extends HTMLProps<HTMLDivElement> {
  error?: string | boolean;
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
      name: props.name || `checkbox_${(Math.random() + 1).toString(36).substring(2, 7)}`,
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
    const { error, className, id, children, idPrefix, ...rest } = this.props;
    const { name } = this.state;
    const { isForm, setError } = this.context;

    if (isForm) {
      setError(name, Boolean(error));
    }

    return (
      <CheckboxContext.Provider value={{ isCheckbox: true, name, getBoxId: this.getBoxId }}>
        <div className={classNames('nhsuk-checkboxes', className)} id={id} {...rest}>
          {error && typeof error === 'string' ? (
            <ErrorMessage id={id ? `${id}--error` : undefined}>{error}</ErrorMessage>
          ) : null}
          {children}
        </div>
      </CheckboxContext.Provider>
    );
  }
}

export default Checkboxes;
