import React, { HTMLProps, useState, useEffect } from 'react';
import classNames from 'classnames';
import { generateRandomName } from '../../util/RandomName';
import LabelBlock from '../utils/LabelBlock';
import { LabelProps } from '../label/Label';
import { HintProps } from '../hint/Hint';
import { ErrorMessageProps } from '../error-message/ErrorMessage';
import { useFormContext } from '../form/FormContext';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintProps;
  error?: boolean | string;
  errorProps?: ErrorMessageProps;
  width?: '2' | '3' | '4' | '5' | '10';
}

const Input: React.FC<InputProps> = ({
  className,
  label,
  id,
  ref,
  labelProps,
  hint,
  hintProps,
  error,
  errorProps,
  width,
  ...rest
}) => {
  const { isForm, setError } = useFormContext();
  const [name] = useState<string>(rest.name || generateRandomName('input'));

  useEffect(() => {
    if (isForm) {
      setError(name, Boolean(error));
    }
  }, [error, name, isForm]);

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
      <input
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: width },
          { 'nhsuk-input--error': error },
          className,
        )}
        id={id}
        ref={ref}
        aria-describedby={hint && id ? `${id}-label` : undefined}
        {...rest}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
