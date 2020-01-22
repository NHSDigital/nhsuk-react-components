import React, { HTMLProps, useContext, useState } from 'react';
import classNames from 'classnames';
import Label from '../label';
import Hint from '../hint';
import ErrorMessage from '../error-message';
import FormContext from '../form/FormContext';

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  error?: boolean | string;
  hint?: string;
}

interface ISelect extends React.FC<SelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = ({ className, label, id, error, hint, name, ...rest }) => {
  const { isForm, setError } = useContext(FormContext);
  const [selectName] = useState<string>(
    name || `select_${(Math.random() + 1).toString(36).substring(2, 7)}`,
  );
  if (isForm) {
    setError(selectName, Boolean(error));
  }
  return (
    <>
      {label ? (
        <Label id={id ? `${id}--label` : undefined} htmlFor={id}>
          {label}
        </Label>
      ) : null}
      {hint ? <Hint id={id ? `${id}--label` : undefined}>{hint}</Hint> : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={id ? `${id}--label` : undefined}>{error}</ErrorMessage>
      ) : null}
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        name={selectName}
        {...rest}
      ></select>
    </>
  );
};

const Option: React.FC<HTMLProps<HTMLOptionElement>> = ({ className, ...rest }) => (
  <option {...rest}></option>
);

Select.Option = Option;

export default Select;
