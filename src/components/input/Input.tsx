import classNames from 'classnames';
import React, { MutableRefObject } from 'react';
import ConditionalFormGroup from '../../util/ConditionalFormGroup';
import useFormComponent, { FormElementProps, InputType } from '../../util/hooks/UseFormComponent';
import LabelBlock from '../../util/LabelBlock';
import { InputWidth } from '../../util/types/NHSUKTypes';

interface InputProps extends FormElementProps<HTMLInputElement> {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  width?: InputWidth;
  disableErrorLine?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { labelBlockProps, renderProps } = useFormComponent(InputType.INPUT, props);
  const { width, className, ...rest } = renderProps;

  return (
    <ConditionalFormGroup error={props.error}>
      <LabelBlock {...labelBlockProps} />
      <input
        className={classNames(
          'nhsuk-input',
          { [`nhsuk-input--width-${width}`]: typeof width === 'number' },
          { [`nhsuk-u-width-${width}`]: typeof width === 'string' },
          { 'nhsuk-input--error': props.error },
          className,
        )}
        {...rest}
        ref={ref}
      />
    </ConditionalFormGroup>
  );
});

Input.displayName = 'Input';
Input.defaultProps = {
  type: 'text',
};

export default Input;
