import React, { HTMLProps, useContext, ChangeEvent } from 'react';
import classNames from 'classnames';
import Label, { LabelProps } from '../../label/Label';
import DateInputContext, { IDateInputContext } from '../DateInputContext';

export interface IndividualDateInputProps extends HTMLProps<HTMLInputElement> {
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


// TODO: Use React.forwardRef
const IndividualDateInput: React.FC<IndividualDateInputProps> = ({
  label,
  labelProps,
  inputType,
  className,
  id,
  name,
  onChange,
  error,
  value,
  defaultValue,
  ...rest
}) => {
  const dateInputCtx = useContext<IDateInputContext>(DateInputContext);

  const { className: labelClassName, ...restLabelProps } = labelProps || {};

  const inputID = id || `${dateInputCtx.id}-${inputType}`;
  const inputName = name || `${dateInputCtx.name}-${inputType}`;
  const inputValue = value !== undefined ? value : dateInputCtx.value?.[inputType];
  const inputDefaultValue = defaultValue !== undefined ? defaultValue : dateInputCtx.defaultValue?.[inputType];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    if (onChange) onChange(e);
    if (!e.isPropagationStopped()) {
      dateInputCtx.handleChange(inputType, e);
    }
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
            { 'nhsuk-input--error': error === undefined ? dateInputCtx.error : error },
            className,
          )}
          value={inputValue}
          defaultValue={inputDefaultValue}
          id={inputID}
          aria-labelledby={restLabelProps.id || `${inputID}--label`}
          name={inputName}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </div>
  );
};

IndividualDateInput.defaultProps = {
  pattern: '[0-9]*',
  inputMode: 'numeric',
  type: 'number',
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
