import React, { HTMLProps, useContext, useState } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import { generateRandomName } from '../../util/RandomID';
import LabelBlock from '../../util/LabelBlock';
import FormContext from '../form/FormContext';

interface SelectProps extends HTMLProps<HTMLSelectElement>, FormElementProps {}

interface ISelect extends React.FC<SelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = ({
  className,
  label,
  labelProps,
  id,
  error,
  errorProps,
  hint,
  hintProps,
  name,
  ...rest
}) => {
  const { isForm, setError } = useContext(FormContext);
  const [selectName] = useState<string>(name || generateRandomName('select'));
  if (isForm) {
    setError(selectName, Boolean(error));
  }
  return (
    <>
      <LabelBlock
        elementId={id}
        label={label}
        labelProps={labelProps}
        error={error}
        errorProps={errorProps}
        hint={hint}
        hintProps={hintProps}
      />
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        name={selectName}
        id={id}
        {...rest}
      />
    </>
  );
};

const Option: React.FC<HTMLProps<HTMLOptionElement>> = ({ className, ...rest }) => (
  <option {...rest} />
);

Select.Option = Option;

export default Select;
