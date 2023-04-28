import React, { HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import FormGroup from '../../util/FormGroup';
import { InputWidth } from '../../util/types/NHSUKTypes';
import { FormElementProps } from '../../util/types/FormTypes';

interface InputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  width?: InputWidth;
  disableErrorLine?: boolean;
  suffix?: string;
}

const Input: React.FC<InputProps> = (props) => (
  <FormGroup<InputProps> {...props} inputType="input">
    {({
      width, className, error, inputRef, suffix, ...rest
    }) => (
    <>
      <input
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: width },
          { 'nhsuk-input--error': error },
          className,
        )}
        ref={inputRef}
        {...rest}
      />
      <span className={"nhsuk-u-margin-left-2"}>{suffix}</span>
    </>
    )}
  </FormGroup>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;