import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';

type SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;

interface ISelect extends React.FC<SelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = ({ children, ...rest }) => (
  <FormGroup<SelectProps> inputType="select" {...rest}>
    {({ className, error, ...restRenderProps }) => (
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        {...restRenderProps}
      >
        {children}
      </select>
    )}
  </FormGroup>
);

const Option: React.FC<HTMLProps<HTMLOptionElement>> = ({ className, ...rest }) => (
  <option {...rest} />
);

Select.Option = Option;

export default Select;
