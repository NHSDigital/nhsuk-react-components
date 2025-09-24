import React, { ComponentPropsWithoutRef, FC, MutableRefObject } from 'react';

import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import FormGroup from '@components/utils/FormGroup';

export interface SelectProps
  extends ComponentPropsWithoutRef<'select'>,
    Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'> {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

const SelectComponent: FC<SelectProps> = ({ children, ...rest }) => (
  <FormGroup<SelectProps> inputType="select" {...rest}>
    {({ className, error, selectRef, ...restRenderProps }) => (
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        ref={selectRef}
        {...restRenderProps}
      >
        {children}
      </select>
    )}
  </FormGroup>
);

const Option: FC<ComponentPropsWithoutRef<'option'>> = (props) => <option {...props} />;

SelectComponent.displayName = 'Select';
Option.displayName = 'Select.Option';

export default Object.assign(SelectComponent, {
  Option,
});
