import React, { HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import FormGroup from '../../../util/FormGroup';
import { InputWidth } from '../../../util/types/NHSUKTypes';
import { FormElementProps } from '../../../util/types/FormTypes';

interface TextInputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  width?: InputWidth;
  disableErrorLine?: boolean;
}

const TextInput: React.FC<TextInputProps> = (props) => (
  <FormGroup<TextInputProps> {...props} inputType="input">
    {({
      width, className, error, inputRef, ...rest
    }) => (
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
    )}
  </FormGroup>
);

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
