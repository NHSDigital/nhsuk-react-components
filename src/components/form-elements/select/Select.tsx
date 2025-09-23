import React, { FC, HTMLProps, MutableRefObject } from 'react';

import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import SingleInputFormGroup from '@components/utils/SingleInputFormGroup';

//  SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
interface ISelectProps extends HTMLProps<HTMLSelectElement>, FormElementProps {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

interface ISelect extends FC<ISelectProps> {
  Option: FC<HTMLProps<HTMLOptionElement>>;
}

const SelectComponent: ISelect = ({ children, ...rest }) => (
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

const Option: FC<HTMLProps<HTMLOptionElement>> = (props) => <option {...props} />;

SelectComponent.Option = Option;

export default SelectComponent;
