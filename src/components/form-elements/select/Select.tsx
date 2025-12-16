'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';

import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export type SelectElementProps = ComponentPropsWithoutRef<'select'>;

export type SelectProps = SelectElementProps &
  Omit<FormElementProps<SelectElementProps, 'select'>, 'fieldsetProps' | 'legend' | 'legendProps'>;

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...rest }, forwardedRef) => (
    <FormGroup<SelectProps, 'select'> inputType="select" {...rest}>
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

export const SelectDivider: FC = () => <hr />;

export const SelectOption = forwardRef<HTMLOptionElement, ComponentPropsWithoutRef<'option'>>(
  (props, forwardedRef) => <option ref={forwardedRef} {...props} />,
);

SelectComponent.displayName = 'Select';
SelectDivider.displayName = 'Select.Divider';
SelectOption.displayName = 'Select.Option';

export const Select = Object.assign(SelectComponent, {
  Divider: SelectDivider,
  Option: SelectOption,
});
