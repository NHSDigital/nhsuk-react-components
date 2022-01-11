import classNames from 'classnames';
import React from 'react';
import useFormGroup from '../../util/hooks/UseFormGroup';
import LabelBlock from '../../util/LabelBlock';
import { FormElementProps, InputType } from '../../util/types/FormTypes';

const Select = React.forwardRef<HTMLSelectElement, FormElementProps<HTMLSelectElement>>(
  (props, ref) => {
    const { FormGroup, renderProps } = useFormGroup(InputType.SELECT, props);

    const { id, className, error, ...rest } = renderProps;

    return (
      <FormGroup error={Boolean(error)}>
        <LabelBlock elementId={id} error={error} {...rest} />
        <select
          {...rest}
          id={id}
          className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
          ref={ref}
        />
      </FormGroup>
    );
  },
);
Select.displayName = 'Select';

export default Select;
