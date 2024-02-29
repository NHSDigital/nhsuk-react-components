import React, { FC, HTMLProps, MutableRefObject } from 'react';

import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import FormGroup from '@util/FormGroup';

//  SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
interface ISelectProps extends HTMLProps<HTMLSelectElement>, FormElementProps {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

interface ISelect extends FC<ISelectProps> {
  Option: FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = ({ children, ...rest }) => (
  <FormGroup<ISelectProps> inputType="select" {...rest}>
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

const Option: FC<HTMLProps<HTMLOptionElement>> = (props) => <option {...props} />;

Select.Option = Option;

export default Select;
