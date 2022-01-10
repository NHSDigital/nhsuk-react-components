import classNames from 'classnames';
import React from 'react';
import useFormGroup from '../../util/hooks/UseFormGroup';
import { FormElementProps, FormGroupConsumer } from '../../util/types/FormTypes';
import { InputWidth } from '../../util/types/NHSUKTypes';

interface InputProps extends FormElementProps<HTMLInputElement> {
  width?: InputWidth;
  disableErrorLine?: boolean;
}

const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  const group = useFormGroup<InputProps>(FormGroupConsumer.INPUT, props);
  const { width, className, error, ...rest } = group.renderProps;

  return (
    <group.Wrapper {...group.wrapperProps}>
      {group.LabelBlock}
      <input
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: width },
          { 'nhsuk-input--error': error },
          className,
        )}
        ref={ref}
        {...rest}
      />
    </group.Wrapper>
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
};

export default Input;
