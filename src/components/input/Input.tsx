import { FormElementProps } from '../../util/types/FormTypes';
import React, { HTMLProps, MutableRefObject } from 'react';

import { InputWidth } from '../../util/types/NHSUKTypes';

import classNames from 'classnames';
import useFormGroup from '../../util/hooks/UseFormGroup';

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'label'>, FormElementProps {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  width?: InputWidth;
  disableErrorLine?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { FormGroupWrapper, wrapperProps, LabelBlock, renderProps } = useFormGroup<InputProps>(
    'input',
    props,
  );
  const { width, className, error, inputRef, ...rest } = renderProps;

  return (
    <FormGroupWrapper {...wrapperProps}>
      {LabelBlock}
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
    </FormGroupWrapper>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
