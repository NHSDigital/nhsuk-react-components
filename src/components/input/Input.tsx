import React, { HTMLProps, useContext, useEffect, MutableRefObject } from 'react';
import FormGroup from '../../util/FormGroup';
// eslint-disable-next-line import/no-named-as-default
import FormGroupContext from '../formgroup/FormGroupContext';
import { InputWidth } from '../../util/types/NHSUKTypes';
import { FormElementProps } from '../../util/types/FormTypes';
// eslint-disable-next-line
import classNames from 'classnames';

interface InputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
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
