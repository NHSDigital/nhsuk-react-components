'use client';

import classNames from 'classnames';
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type EventHandler,
} from 'react';

import { DateInputContext, type IDateInputContext } from './DateInputContext.js';
import { DateInputDay, DateInputMonth, DateInputYear } from './components/index.js';

import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

export interface DateInputChangeEvent extends Omit<
  ChangeEvent<DateInputElement>,
  'target' | 'currentTarget'
> {
  target: DateInputElement;
  currentTarget: DateInputElement;
}

export interface DateInputElement extends Omit<HTMLInputElement, 'value' | 'onChange'> {
  value?: Partial<DateInputValue>;
  onChange?: EventHandler<DateInputChangeEvent>;
}

export interface DateInputElementProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'defaultValue' | 'onChange'
> {
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: EventHandler<DateInputChangeEvent>;
}

export type DateInputProps = DateInputElementProps &
  Omit<
    FormElementProps<Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange'>, 'div'>,
    'label' | 'labelProps'
  >;

export type DateInputType = 'day' | 'month' | 'year';

const DateInputComponent = forwardRef<HTMLDivElement, DateInputProps>(
  ({ children, onChange, value, defaultValue, formGroupProps, ...rest }, forwardedRef) => {
    const moduleRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(formGroupProps?.ref, () => moduleRef.current!, [moduleRef]);

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
      <FormGroup<Omit<DateInputProps, 'value' | 'defaultValue'>, 'div'>
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
