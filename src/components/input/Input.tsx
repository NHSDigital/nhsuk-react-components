import classNames from 'classnames';
import React from 'react';
import useFormGroup from '../../util/hooks/UseFormGroup';
import LabelBlock from '../../util/LabelBlock';
import { FormElementProps, InputType } from '../../util/types/FormTypes';
import { InputWidth } from '../../util/types/NHSUKTypes';

interface InputProps extends FormElementProps<HTMLInputElement> {
  width?: InputWidth;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { FormGroup, renderProps } = useFormGroup(InputType.INPUT, props);

  return (
    <FormGroup>
      <LabelBlock elementId={renderProps.id} {...renderProps} />
      <input
        {...renderProps}
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${props.width}`]: props.width },
          { 'nhsuk-input--error': props.error },
          props.className,
        )}
        ref={ref}
      />
    </FormGroup>
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
};

export default Input;
