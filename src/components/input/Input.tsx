import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import Hint from '../hint';
import FormContext, { IFormContext } from '../form/FormContext';
import ErrorMessage from '../error-message';

interface InputProps extends HTMLProps<HTMLInputElement> {
  labelProps?: HTMLProps<HTMLLabelElement>;
  hint?: string;
  error?: boolean | string;
  width?: '2' | '3' | '4' | '5' | '10';
}

const Input: React.FC<InputProps> = ({
  className,
  children,
  id,
  ref,
  labelProps,
  hint,
  width,
  error,
  ...rest
}) => {
  const { isForm, setError } = useContext<IFormContext>(FormContext);

  if (isForm) {
    setError(name, Boolean(error));
  }

  return (
    <>
      {children ? (
        <label
          className={classNames('nhsuk-label', labelProps ? labelProps.className : undefined)}
          htmlFor={id}
          {...labelProps}
        >
          {children}
        </label>
      ) : null}
      {hint ? <Hint id={id ? `${id}-label` : undefined}>{hint}</Hint> : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={id ? `${id}-error` : undefined}>{error}</ErrorMessage>
      ) : null}
      <input
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: width },
          { 'nhsuk-input--error': error },
          classNames,
        )}
        id={id}
        ref={ref}
        aria-describedby={hint && id ? `${id}-label` : undefined}
        {...rest}
      ></input>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
