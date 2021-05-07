import React, { HTMLProps, MutableRefObject, useContext, useEffect  } from 'react';
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
        className={classNames(
          'nhsuk-select',
          { 'nhsuk-select--error': error },
          className,
        )}
        ref={selectRef}
        {...restRenderProps}
      >
        {children}
      </select>
    );
  }
  return (
    <FormGroup<SelectProps> inputType="select" {...rest}>
      {({ ...restRenderProps }) => (
        <select
          className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
          {...restRenderProps}
        >
          {children}
        </select>
      )}
    </FormGroup>
  );
};

const Option: React.FC<HTMLProps<HTMLOptionElement>> = ({ className, ...rest }) => (
  <option {...rest} />
);

/*

const SelectElement: React.FC<SelectProps> = ({ children, ...props }) => {
  const { width, className, error, hint, label, ...rest } = props;
  return (
    <select
      className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
      {...rest}
    >
      {children}
    </select>
  );
};
*/
Select.Option = Option;

export default Select;
