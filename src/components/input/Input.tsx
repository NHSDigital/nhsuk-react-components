import React, { HTMLProps, useState, useEffect } from 'react';
import classNames from 'classnames';
import { InputWidth } from '../../util/types/NHSUKTypes';
import { FormElementProps } from '../../util/types/FormTypes';
import { generateRandomName } from '../../util/RandomName';
import LabelBlock from '../../util/LabelBlock';
import { useFormContext } from '../form/FormContext';

interface InputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  width?: InputWidth;
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
