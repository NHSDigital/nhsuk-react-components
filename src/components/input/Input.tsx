import React, { HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import FormGroup from '../../util/FormGroup';
import { InputWidth } from '../../util/types/NHSUKTypes';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroupContext from '../formgroup/FormGroupContext';

interface InputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: (inputRef: HTMLInputElement | null) => any;
  width?: InputWidth;
  disableErrorLine?: boolean;
}

const Input: React.FC<InputProps> = props => {
  const { isInFormGroup, setInputID } = useContext(FormGroupContext);
  useEffect(() => {
    if (isInFormGroup && props.id) {
      setInputID(props.id);
      return () => {
        setInputID(undefined);
      };
    }
    return () => {};
  }, [isInFormGroup, props.id]);

  if (isInFormGroup) {
    return <InputElement {...props} />;
  }
  return (
    <FormGroup<InputProps> {...props} inputType="input">
      {renderProps => <InputElement {...renderProps} />}
    </FormGroup>
  );
};

const InputElement: React.FC<InputProps> = props => {
  const { width, className, error, inputRef, hint, label, ...rest } = props;
  return (
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
  );
};
Input.defaultProps = {
  type: 'text',
};

export default Input;
