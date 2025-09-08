'use client';
import React, { useContext, ChangeEvent } from 'react';
import classNames from 'classnames';
import Label, { LabelProps } from '../../label/Label';
import DateInputContext, { IDateInputContext } from '../DateInputContext';

export interface IndividualDateInputProps extends React.HTMLProps<HTMLInputElement> {
  labelProps?: LabelProps;
  inputType: 'day' | 'month' | 'year';
  inputRef?: (ref: HTMLInputElement | null) => void;
  error?: boolean;
}

const labels: Record<'day' | 'month' | 'year', string> = {
  day: 'Day',
  month: 'Month',
  year: 'Year',
};

const IndividualDateInput: React.FC<IndividualDateInputProps> = ({
  label,
  labelProps,
  inputType,
  className,
  id,
  name,
  onChange,
  inputRef,
  error,
  value,
  defaultValue,
  pattern = '[0-9]*',
  inputMode = 'numeric',
  type = 'text',
  ...rest
}) => {
  const {
    id: ctxId,
    name: ctxName,
    error: ctxError,
    value: ctxValue,
    defaultValue: ctxDefaultValue,
    handleChange: ctxHandleChange,
    registerRef,
  } = useContext<IDateInputContext>(DateInputContext);

  const { className: labelClassName, ...restLabelProps } = labelProps || {};

  const inputID = id || `${ctxId}-${inputType}`;
  const inputName = name || `${ctxName}-${inputType}`;
  const inputValue = value !== undefined ? value : ctxValue?.[inputType];
  const inputDefaultValue =
    defaultValue !== undefined ? defaultValue : ctxDefaultValue?.[inputType];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (onChange) onChange(e);
    if (!e.isPropagationStopped()) {
      ctxHandleChange(inputType, e);
    }
  };

  const refCallback = (ref: HTMLInputElement | null) => {
    registerRef(inputType, ref);
    if (inputRef) inputRef(ref);
  };

  return (
    <div className="nhsuk-date-input__item">
      <div className="nhsuk-form-group">
        <Label
          className={classNames('nhsuk-date-input__label', labelClassName)}
          id={`${inputID}--label`}
          htmlFor={inputID}
          {...restLabelProps}
        >
          {label || labels[inputType]}
        </Label>
        <input
          className={classNames(
            'nhsuk-input nhsuk-date-input__input',
            { 'nhsuk-input--width-2': inputType === 'day' || inputType === 'month' },
            { 'nhsuk-input--width-4': inputType === 'year' },
            { 'nhsuk-input--error': error === undefined ? ctxError : error },
            className,
          )}
          value={inputValue}
          defaultValue={inputDefaultValue}
          id={inputID}
          name={inputName}
          onChange={handleChange}
          ref={refCallback}
          pattern={pattern}
          inputMode={inputMode}
          type={type}
          {...rest}
        />
      </div>
    </div>
  );
};

export const DayInput: React.FC<Omit<IndividualDateInputProps, 'inputType'>> = (props) => (
  <IndividualDateInput inputType="day" {...props} />
);

export const MonthInput: React.FC<Omit<IndividualDateInputProps, 'inputType'>> = (props) => (
  <IndividualDateInput inputType="month" {...props} />
);

export const YearInput: React.FC<Omit<IndividualDateInputProps, 'inputType'>> = (props) => (
  <IndividualDateInput inputType="year" {...props} />
);
