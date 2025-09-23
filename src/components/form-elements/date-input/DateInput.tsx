'use client';

import React, { HTMLProps, ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { DayInput, MonthInput, YearInput } from './components/IndividualDateInputs';
import SingleInputFormGroup from '@components/utils/SingleInputFormGroup';
import DateInputContext, { IDateInputContext } from './DateInputContext';
import { FormElementProps } from '@util/types/FormTypes';

type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

export type DateInputChangeEvent = ChangeEvent<HTMLInputElement> & {
  target: HTMLInputElement & { value: DateInputValue };
  currentTarget: HTMLInputElement & { value: DateInputValue };
};

interface DateInputProps
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'defaultValue'>,
    FormElementProps {
  autoSelectNext?: boolean;
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: (e: DateInputChangeEvent) => void;
}

type InputType = 'day' | 'month' | 'year';

const DateInputComponent = ({
  autoSelectNext,
  children,
  onChange,
  value,
  defaultValue,
  ...rest
}: DateInputProps) => {
  let monthRef: HTMLInputElement | null = null;
  let yearRef: HTMLInputElement | null = null;
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

  const handleFocusNextInput = (inputType: InputType, value: string): void => {
    if (!autoSelectNext) return;
    if (inputType === 'day' && value.length === 2 && monthRef) {
      monthRef.focus();
    } else if (inputType === 'month' && value.length === 2 && yearRef) {
      yearRef.focus();
    }
  };

  const handleChange = (inputType: InputType, event: ChangeEvent<HTMLInputElement>): void => {
    handleFocusNextInput(inputType, event.target.value);
    event.stopPropagation();

    if (onChange) {
      const newEventValue = {
        ...internalDate,
        [inputType]: event.target.value,
      };
      const newEvent = {
        ...event,
        target: { ...event.target, value: newEventValue },
        currentTarget: { ...event.currentTarget, value: newEventValue },
      } as DateInputChangeEvent;

      onChange(newEvent);
      setInternalDate(newEventValue);
    }
  };

  const registerRef = (inputType: InputType, ref: HTMLInputElement | null): void => {
    if (inputType === 'month') monthRef = ref;
    if (inputType === 'year') yearRef = ref;
  };

  return (
    <SingleInputFormGroup<Omit<DateInputProps, 'value' | 'defaultValue'>>
      inputType="dateinput"
      {...rest}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {({ className, name, id, error, autoSelectNext, ...restRenderProps }) => {
        const contextValue: IDateInputContext = {
          id,
          name,
          error,
          value,
          defaultValue,
          handleChange,
          registerRef,
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
    </SingleInputFormGroup>
  );
};

DateInputComponent.Day = DayInput;
DateInputComponent.Month = MonthInput;
DateInputComponent.Year = YearInput;

export default DateInputComponent;
