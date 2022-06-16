import classNames from 'classnames';
import React from 'react';
import ConditionalFormGroup from '../../util/ConditionalFormGroup';
import useFormComponent, { FormElementProps, InputType } from '../../util/hooks/UseFormComponent';
import LabelBlock from '../../util/LabelBlock';

const Select = React.forwardRef<HTMLSelectElement, FormElementProps<HTMLSelectElement>>(
  (props, ref) => {
    const { renderProps, labelBlockProps } = useFormComponent(InputType.SELECT, props);
    const { children, className, ...rest } = renderProps;

    return (
      <ConditionalFormGroup error={props.error}>
        <LabelBlock {...labelBlockProps} />
        <select
          className={classNames('nhsuk-select', { 'nhsuk-select--error': props.error }, className)}
          {...rest}
          ref={ref}
        >
          {children}
        </select>
      </ConditionalFormGroup>
    );
  },
);
Select.displayName = 'Select';

export default Select;
