import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import FormGroup from '@components/utils/FormGroup';

export type SelectProps = ComponentPropsWithoutRef<'select'> &
  Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'>;

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...rest }, forwardedRef) => (
    <FormGroup<SelectProps> inputType="select" {...rest}>
      {({ className, error, ...restRenderProps }) => (
        <select
          className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
          ref={forwardedRef}
          {...restRenderProps}
        >
          {children}
        </select>
      )}
    </FormGroup>
  ),
);

const Option = forwardRef<HTMLOptionElement, ComponentPropsWithoutRef<'option'>>(
  (props, forwardedRef) => <option ref={forwardedRef} {...props} />,
);

SelectComponent.displayName = 'Select';
Option.displayName = 'Select.Option';

export default Object.assign(SelectComponent, {
  Option,
});
