import React, { HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';
import FormGroupContext from '../formgroup/FormGroupContext';

type SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;

interface ISelect extends React.FC<SelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = props => {
  const { isInFormGroup, setInputID } = useContext(FormGroupContext);
  useEffect(() => {
    if (isInFormGroup && props.id) {
      setInputID(props.id);
      return () => {
        setInputID(undefined);
      };
    }
    return () => {};
  }, [isInFormGroup, props.id]);
  if (isInFormGroup) {
    const { children, className, error, ...rest } = props;
    return (
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        {...rest}
      >
        {children}
      </select>
    );
  }
  return (
    <FormGroup<SelectProps> inputType="select" {...props}>
      {renderProps => <SelectElement {...renderProps} />}
    </FormGroup>
  );
};

const Option: React.FC<HTMLProps<HTMLOptionElement>> = ({ className, ...rest }) => (
  <option {...rest} />
);

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

Select.Option = Option;

export default Select;
