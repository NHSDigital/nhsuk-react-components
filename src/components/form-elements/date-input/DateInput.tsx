'use client';

import classNames from 'classnames';
import {
  createRef,
  forwardRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type EventHandler,
} from 'react';
import { DateInputDay, DateInputMonth, DateInputYear } from './components/index.js';
import { DateInputContext, type IDateInputContext } from './DateInputContext.js';
import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

export interface DateInputChangeEvent
  extends Omit<ChangeEvent<DateInputElement>, 'target' | 'currentTarget'> {
  target: DateInputElement;
  currentTarget: DateInputElement;
}

export interface DateInputElement extends Omit<HTMLInputElement, 'value' | 'onChange'> {
  value?: Partial<DateInputValue>;
  onChange?: EventHandler<DateInputChangeEvent>;
}

export interface DateInputProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange'>,
    Omit<FormElementProps, 'label' | 'labelProps'> {
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: EventHandler<DateInputChangeEvent>;
}

export type DateInputType = 'day' | 'month' | 'year';

const DateInputComponent = forwardRef<HTMLDivElement, DateInputProps>(
  ({ children, onChange, value, defaultValue, formGroupProps, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => formGroupProps?.ref || createRef<HTMLDivElement>());

    const [internalDate, setInternalDate] = useState<DateInputValue>({
      day: value?.day ?? '',
      month: value?.month ?? '',
      year: value?.year ?? '',
    });

    const handleChange = (inputType: DateInputType, event: ChangeEvent<HTMLInputElement>): void => {
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
        formGroupProps={{ ...formGroupProps, ref: moduleRef }}
        fieldsetProps={{ role: 'group' }}
        inputType="dateinput"
        {...rest}
      >
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
            <div
              className={classNames('nhsuk-date-input', className)}
              id={id}
              ref={forwardedRef}
              {...restRenderProps}
            >
              <DateInputContext.Provider value={contextValue}>
                {children || (
                  <>
                    <DateInputDay />
                    <DateInputMonth />
                    <DateInputYear />
                  </>
                )}
              </DateInputContext.Provider>
            </div>
          );
        }}
      </FormGroup>
    );
  },
);

DateInputComponent.displayName = 'DateInput';

export const DateInput = Object.assign(DateInputComponent, {
  Day: DateInputDay,
  Month: DateInputMonth,
  Year: DateInputYear,
});
