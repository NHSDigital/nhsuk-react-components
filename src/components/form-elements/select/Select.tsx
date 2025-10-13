'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

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

export const Select = Object.assign(SelectComponent, {
  Option,
});
