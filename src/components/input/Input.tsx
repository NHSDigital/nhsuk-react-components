import React, { HTMLProps } from 'react';

import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';
import { InputWidth } from '../../util/types/NHSUKTypes';
import classNames from 'classnames';

interface InputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: (inputRef: HTMLInputElement | null) => any;
  width?: InputWidth;
  disableErrorLine?: boolean;
}

const Input: React.FC<InputProps> = props => (
  <FormGroup<InputProps> {...props} inputType="input">
    {({ width, className, error, inputRef, ...rest }) => (
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
        {props.children}
      </>
    )}
  </FormGroup>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
