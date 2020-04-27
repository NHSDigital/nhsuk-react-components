import React, { HTMLProps, PureComponent, useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import { generateRandomName } from '../../util/RandomName';
import { LabelProps } from '../label/Label';
import { HintProps } from '../hint/Hint';
import LabelBlock from '../utils/LabelBlock';
import { ErrorMessageProps } from '../error-message/ErrorMessage';
import Label from '../label';
import RadioContext, { IRadioContext } from './RadioContext';
import Hint from '../hint';
import FormContext from '../form/FormContext';

interface RadioProps extends HTMLProps<HTMLInputElement> {
  labelProps?: HTMLProps<HTMLLabelElement>;
  hint?: string;
}

const Radio: React.FC<RadioProps> = ({
  className,
  children,
  id,
  labelProps,
  name,
  hint,
  ...rest
}) => {
  const [radioId, setRadioId] = useState<string | undefined>(undefined);
  const context = useContext<IRadioContext>(RadioContext);

  useEffect(() => {
    if (id) {
      setRadioId(id);
    } else if (context) {
      setRadioId(context.getRadioId());
    }
  }, [id]);

  return (
    <div className="nhsuk-radios__item" {...rest}>
      <input
        id={radioId}
        name={name || context.name}
        className={classNames('nhsuk-radios__input', className)}
        {...rest}
      />
      {children ? (
        <Label
          id={labelProps && labelProps.id ? labelProps.id : `${radioId}-label`}
          htmlFor={radioId}
          className={classNames(
            'nhsuk-radios__label',
            labelProps ? labelProps.className : undefined,
          )}
        >
          {children}
        </Label>
      ) : null}
      {hint ? (
        <Hint className="nhsuk-radios__hint" id={radioId ? `${radioId}-hint` : undefined}>
          {hint}
        </Hint>
      ) : null}
    </div>
  );
};

Radio.defaultProps = {
  type: 'radio',
};

const Divider: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);

interface Radios {
  radioCount: number;
  name: string;
}

interface RadiosProps extends HTMLProps<HTMLDivElement> {
  inline?: boolean;
  label?: string;
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintProps;
  error?: boolean | string;
  errorProps?: ErrorMessageProps;
}

class Radios extends PureComponent<RadiosProps> {
  static contextType = FormContext;

  static Radio = Radio;

  static Divider = Divider;

  constructor(props: RadiosProps, ...rest: any[]) {
    super(props, ...rest);
    this.name = props.name || generateRandomName('radios');
    this.radioCount = 0;
  }

  getRadioId = (): string | undefined => {
    const { id } = this.props;
    if (id) {
      this.radioCount += 1;
      return `${id}-${this.radioCount}`;
    }
    return undefined;
  };

  render() {
    const {
      className,
      id,
      children,
      inline,
      label,
      labelProps,
      hint,
      hintProps,
      error,
      errorProps,
      ...rest
    } = this.props;

    const { isForm, setError } = this.context;
    if (isForm) {
      setError(this.name, Boolean(error));
    }

    return (
      <>
        <LabelBlock
          elementId={id}
          label={label}
          labelProps={labelProps}
          hint={hint}
          hintProps={hintProps}
          error={error}
          errorProps={errorProps}
        />
        <RadioContext.Provider value={{ getRadioId: this.getRadioId, name: this.name }}>
          <div
            className={classNames('nhsuk-radios', { 'nhsuk-radios--inline': inline }, className)}
            id={id}
            {...rest}
          >
            {children}
          </div>
        </RadioContext.Provider>
      </>
    );
  }
}

export default Radios;
