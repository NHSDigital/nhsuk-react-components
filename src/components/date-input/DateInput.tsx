import React, { HTMLProps, PureComponent, ChangeEvent } from 'react';
import { DayInput, MonthInput, YearInput } from './components/IndividualDateInputs';
import FormGroup from '../../util/FormGroup';
import DateInputContext, { IDateInputContext } from './DateInputContext';
import { FormElementProps } from '../../util/types/FormTypes';

type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

type DateInputChangeEvent = ChangeEvent<HTMLInputElement> & {
  target: HTMLInputElement & { value: DateInputValue };
  currentTarget: HTMLInputElement & { value: DateInputValue };
};

interface DateInputProps
  extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'defaultValue'>,
    FormElementProps {
  autoSelectNext?: boolean;
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: (e: DateInputChangeEvent) => any;
}

interface DateInputState {
  values: {
    day: string;
    month: string;
    year: string;
  };
}

interface DateInput extends PureComponent<DateInputProps, DateInputState> {
  monthRef: null | HTMLInputElement;
  yearRef: null | HTMLInputElement;
}

class DateInput extends PureComponent<DateInputProps, DateInputState> {
  constructor(props: DateInputProps, ...rest: any[]) {
    super(props, ...rest);
    this.state = {
      values: { day: '', month: '', year: '' },
    };

    this.monthRef = null;
    this.yearRef = null;
  }

  handleSelectNext = (inputType: 'day' | 'month' | 'year', value: string) => {
    if (!this.props.autoSelectNext) return;
    if (inputType === 'day' && value.length === 2 && this.monthRef) {
      this.monthRef.focus();
    } else if (inputType === 'month' && value.length === 2 && this.yearRef) {
      this.yearRef.focus();
    }
  };

  handleChange = (inputType: 'day' | 'month' | 'year', event: ChangeEvent<HTMLInputElement>) => {
    this.handleSelectNext(inputType, event.target.value);
    event.stopPropagation();
    this.setState(state => {
      const newEventValue = {
        ...state.values,
        [inputType]: event.target.value,
      };
      if (this.props.onChange) {
        const newEvent = {
          ...event,
          target: { ...event.target, value: newEventValue },
          currentTarget: { ...event.currentTarget, value: newEventValue },
        } as DateInputChangeEvent;
        this.props.onChange(newEvent);
      }
      return { values: newEventValue };
    });
  };

  registerRef = (inputType: 'day' | 'month' | 'year', ref: HTMLInputElement | null) => {
    if (inputType === 'month') this.monthRef = ref;
    if (inputType === 'year') this.yearRef = ref;
  };

  static Day = DayInput;

  static Month = MonthInput;

  static Year = YearInput;

  render() {
    const { children, onChange, value, defaultValue, ...rest } = this.props;

    return (
      <FormGroup<Omit<DateInputProps, 'value' | 'defaultValue'>> inputType="dateinput" {...rest}>
        {({ className, name, id, error, autoSelectNext, ...restRenderProps }) => {
          const contextValue: IDateInputContext = {
            id,
            name,
            error,
            value,
            defaultValue,
            handleChange: this.handleChange,
            registerRef: this.registerRef,
          };
          return (
            <div className="nhsuk-date-input" {...restRenderProps} id={id}>
              <DateInputContext.Provider value={contextValue}>
                {children || (
                  <>
                    <DateInput.Day />
                    <DateInput.Month />
                    <DateInput.Year />
                  </>
                )}
              </DateInputContext.Provider>
            </div>
          );
        }}
      </FormGroup>
    );
  }
}

export default DateInput;
