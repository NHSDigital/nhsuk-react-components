import React, { HTMLProps, MutableRefObject } from 'react';

import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';
import classNames from 'classnames';

//  SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
interface ISelectProps extends HTMLProps<HTMLSelectElement>, FormElementProps {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

interface ISelect extends React.FC<ISelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
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

const Option: React.FC<HTMLProps<HTMLOptionElement>> = (props) => <option {...props} />;

Select.Option = Option;

export default Select;
