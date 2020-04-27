import React, { HTMLProps, useContext, useState } from 'react';
import classNames from 'classnames';
import { generateRandomName } from '../../util/RandomName';
import { ErrorMessageProps } from '../error-message/ErrorMessage';
import { HintProps } from '../hint/Hint';
import { LabelProps } from '../label/Label';
import LabelBlock from '../utils/LabelBlock';
import FormContext from '../form/FormContext';

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label?: string;
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintProps;
  error?: boolean | string;
  errorProps?: ErrorMessageProps;
}

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
