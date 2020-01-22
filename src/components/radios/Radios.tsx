import React, { HTMLProps, PureComponent, useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import Label from '../label';
import RadioContext, { IRadioContext } from './RadioContext';
import Hint from '../hint';
import FormContext from '../form/FormContext';
import ErrorMessage from '../error-message';

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
        name={name ? name : context.name}
        className={classNames('nhsuk-radios__input', className)}
        {...rest}
      ></input>
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
  <div className={classNames('nhsuk-radios__divider', className)} {...rest}></div>
);

interface Radios {
  radioCount: number;
  name: string;
}

interface RadiosProps extends HTMLProps<HTMLDivElement> {
  inline?: boolean;
  error?: boolean | string;
}

class Radios extends PureComponent<RadiosProps> {
  static contextType = FormContext;
  static Radio = Radio;
  static Divider = Divider;

  constructor(props: RadiosProps, ...rest: any[]) {
    super(props, ...rest);
    this.name = props.name || `radio_${(Math.random() + 1).toString(36).substring(2, 7)}`;
    this.radioCount = 0;
  }

  getRadioId = (): string | undefined => {
    const { id } = this.props;
    if (id) {
      ++this.radioCount;
      return `${id}-${this.radioCount}`;
    }
    return undefined;
  };

  render() {
    const { className, id, children, inline, error, ...rest } = this.props;
    const { isForm, setError } = this.context;
    if (isForm) {
      setError(this.name, Boolean(error));
    }

    return (
      <RadioContext.Provider value={{ getRadioId: this.getRadioId, name: this.name }}>
        {error && typeof error === 'string' ? (
          <ErrorMessage id={id ? `${id}--error` : undefined}>{error}</ErrorMessage>
        ) : null}
        <div
          className={classNames('nhsuk-radios', { 'nhsuk-radios--inline': inline }, className)}
          id={id}
          {...rest}
        >
          {children}
        </div>
      </RadioContext.Provider>
    );
  }
}

export default Radios;
