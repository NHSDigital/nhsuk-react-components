import classNames from 'classnames';
import React, {
  createRef,
  forwardRef,
  useEffect,
  useState,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type EventHandler,
} from 'react';
import { DayInput, MonthInput, YearInput } from './components';
import { DateInputContext, type IDateInputContext } from '.';
import { FormGroup } from '#components/utils';
import { type FormElementProps } from '#util/types';

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

const DateInputComponent = forwardRef<HTMLDivElement, DateInputProps>(
  ({ children, onChange, value, defaultValue, formGroupProps, ...rest }, forwardedRef) => {
    const [moduleRef] = useState(() => formGroupProps?.ref || createRef<HTMLDivElement>());

    const [internalDate, setInternalDate] = useState<DateInputValue>({
      day: value?.day ?? '',
      month: value?.month ?? '',
      year: value?.year ?? '',
    });

    useEffect(() => {
      if (!value) {
        return;
      }

      if (
        value.day === internalDate.day &&
        value.month === internalDate.month &&
        value.year === internalDate.year
      ) {
        return;
      }

      return setInternalDate({
        day: value.day ?? internalDate.day,
        month: value.month ?? internalDate.month,
        year: value.year ?? internalDate.year,
      });
    }, [internalDate, value]);

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
  },
);

DateInputComponent.displayName = 'DateInput';

export const DateInput = Object.assign(DateInputComponent, {
  Day: DayInput,
  Month: MonthInput,
  Year: YearInput,
});
