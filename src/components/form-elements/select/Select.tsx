import React from 'react';

import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import SingleInputFormGroup from '@components/utils/SingleInputFormGroup';
import { MutableRefObject } from '../fieldset/Fieldset';

//  SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
interface ISelectProps extends React.HTMLProps<HTMLSelectElement>, FormElementProps {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

interface ISelect extends React.FC<ISelectProps> {
  Option: React.FC<React.HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = ({ children, ...rest }) => (
  <SingleInputFormGroup<ISelectProps> inputType="select" {...rest}>
    {({ className, error, selectRef, ...restRenderProps }) => (
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        ref={selectRef}
        {...restRenderProps}
      >
        {children}
      </select>
    )}
  </SingleInputFormGroup>
);

const Option: React.FC<React.HTMLProps<HTMLOptionElement>> = (props) => <option {...props} />;

Select.Option = Option;

export default Select;
