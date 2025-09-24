'use client';

import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  EventHandler,
  FC,
  useEffect,
  useState,
} from 'react';
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

export interface DateInputChangeEvent
  extends Omit<ChangeEvent<DateInputElement>, 'target' | 'currentTarget'> {
  target: DateInputElement;
  currentTarget: DateInputElement;
}

interface DateInputElement extends Omit<HTMLInputElement, 'value' | 'onChange'> {
  value?: Partial<DateInputValue>;
  onChange?: EventHandler<DateInputChangeEvent>;
}

interface DateInputProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange'>,
    Omit<FormElementProps, 'label' | 'labelProps'> {
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: EventHandler<DateInputChangeEvent>;
}

type InputType = 'day' | 'month' | 'year';

const DateInputComponent: FC<DateInputProps> = ({
  children,
  onChange,
  value,
  defaultValue,
  ...rest
}) => {
  const [internalDate, setInternalDate] = useState<DateInputValue>({
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

    const newEvent: ChangeEvent<DateInputElement> = {
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
                  <DayInput />
                  <MonthInput />
                  <YearInput />
                </>
              )}
            </DateInputContext.Provider>
          </div>
        );
      }}
    </FormGroup>
  );
};

DateInputComponent.displayName = 'DateInput';

export default Object.assign(DateInputComponent, {
  Day: DayInput,
  Month: MonthInput,
  Year: YearInput,
});
