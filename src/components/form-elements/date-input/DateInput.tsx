'use client';

import React, { HTMLProps, ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { DayInput, MonthInput, YearInput } from './components/IndividualDateInputs';
import FormGroup from '@components/utils/FormGroup';
import DateInputContext, { IDateInputContext } from './DateInputContext';
import { FormElementProps } from '@util/types/FormTypes';

type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

export type DateInputChangeEvent = ChangeEvent<
  Omit<HTMLInputElement, 'value'> & { value: DateInputValue }
>;

interface DateInputProps
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'defaultValue' | 'label'>,
    Omit<FormElementProps, 'label' | 'labelProps'> {
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: (e: DateInputChangeEvent) => void;
}

type InputType = 'day' | 'month' | 'year';

const DateInputComponent = ({
  children,
  onChange,
  value,
  defaultValue,
  ...rest
}: DateInputProps) => {
  const [internalDate, setInternalDate] = useState<Record<InputType, string>>({
    day: value?.day ?? '',
    month: value?.month ?? '',
    year: value?.year ?? '',
  });

  useEffect(() => {
    const newState = { ...internalDate };
    const { day, month, year } = value ?? {};
    if (day && day !== internalDate.day) newState.day = day;
    if (month && month !== internalDate.month) newState.month = month;
    if (year && year !== internalDate.year) newState.year = year;

    return setInternalDate(newState);
  }, [value]);

  const handleChange = (inputType: InputType, event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation();

    const newEventValue: DateInputValue = {
      ...internalDate,
      [inputType]: event.target.value,
    };

    const newEvent: DateInputChangeEvent = {
      ...event,
      target: { ...event.target, value: newEventValue },
      currentTarget: { ...event.currentTarget, value: newEventValue },
    };

    onChange?.(newEvent);
    setInternalDate(newEventValue);
  };

  return (
    <FormGroup<Omit<DateInputProps, 'value' | 'defaultValue'>>
      fieldsetProps={{ role: 'group' }}
      inputType="dateinput"
      {...rest}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {({ className, name, id, error, ...restRenderProps }) => {
        const contextValue: IDateInputContext = {
          id,
          name,
          error,
          value,
          defaultValue,
          handleChange,
        };
        return (
          <div className={classNames('nhsuk-date-input', className)} {...restRenderProps} id={id}>
            <DateInputContext.Provider value={contextValue}>
              {children || (
                <>
                  <DateInputComponent.Day />
                  <DateInputComponent.Month />
                  <DateInputComponent.Year />
                </>
              )}
            </DateInputContext.Provider>
          </div>
        );
      }}
    </FormGroup>
  );
};

DateInputComponent.Day = DayInput;
DateInputComponent.Month = MonthInput;
DateInputComponent.Year = YearInput;

export default DateInputComponent;
