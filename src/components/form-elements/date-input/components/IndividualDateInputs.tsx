import classNames from 'classnames';
import React, {
  forwardRef,
  useContext,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
} from 'react';
import { DateInputContext, type IDateInputContext } from '..';
import { Label } from '#components/form-elements';
import { type FormElementProps } from '#util/types';

export interface IndividualDateInputProps
  extends ComponentPropsWithoutRef<'input'>,
    Pick<FormElementProps, 'label' | 'labelProps'> {
  error?: string | false;
  inputType: 'day' | 'month' | 'year';
}

const labels: Record<'day' | 'month' | 'year', string> = {
  day: 'Day',
  month: 'Month',
  year: 'Year',
};

const IndividualDateInput = forwardRef<HTMLInputElement, IndividualDateInputProps>(
  (props, forwardedRef) => {
    const {
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
    } = props;

    const {
      id: ctxId,
      name: ctxName,
      error: ctxError,
      value: ctxValue,
      defaultValue: ctxDefaultValue,
      handleChange: ctxHandleChange,
    } = useContext<IDateInputContext>(DateInputContext);

    const { className: labelClassName, ...restLabelProps } = labelProps || {};

    const inputID = id || `${ctxId}-${inputType}`;
    const inputName = name || `${ctxName}-${inputType}`;
    const inputValue = value === undefined ? ctxValue?.[inputType] : value;
    const inputDefaultValue =
      defaultValue === undefined ? ctxDefaultValue?.[inputType] : defaultValue;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      if (onChange) onChange(e);
      if (!e.isPropagationStopped()) {
        ctxHandleChange(inputType, e);
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
              { 'nhsuk-input--error': error === undefined ? ctxError : error },
              className,
            )}
            value={inputValue}
            defaultValue={inputDefaultValue}
            id={inputID}
            name={inputName}
            onChange={handleChange}
            ref={forwardedRef}
            inputMode="numeric"
            type="text"
            {...rest}
          />
        </div>
      </div>
    );
  },
);

export const DayInput = forwardRef<HTMLInputElement, Omit<IndividualDateInputProps, 'inputType'>>(
  (props, forwardedRef) => <IndividualDateInput inputType="day" ref={forwardedRef} {...props} />,
);

export const MonthInput = forwardRef<HTMLInputElement, Omit<IndividualDateInputProps, 'inputType'>>(
  (props, forwardedRef) => <IndividualDateInput inputType="month" ref={forwardedRef} {...props} />,
);

export const YearInput = forwardRef<HTMLInputElement, Omit<IndividualDateInputProps, 'inputType'>>(
  (props, forwardedRef) => <IndividualDateInput inputType="year" ref={forwardedRef} {...props} />,
);

IndividualDateInput.displayName = 'DateInput.Field';
DayInput.displayName = 'DateInput.Day';
MonthInput.displayName = 'DateInput.Month';
YearInput.displayName = 'DateInput.Year';
