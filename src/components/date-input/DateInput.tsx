import React, { HTMLProps, PureComponent, ChangeEvent } from 'react';
import classNames from 'classnames';
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
  onChange?: (e: DateInputChangeEvent) => void;
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
  static Day = DayInput;

  static Month = MonthInput;

  static Year = YearInput;

  constructor(props: DateInputProps) {
    super(props);
    this.state = {
      values: {
        day: props.value?.day || '',
        month: props.value?.month || '',
        year: props.value?.year || '',
      },
    };

    this.monthRef = null;
    this.yearRef = null;
  }

  componentDidUpdate(prevProps: DateInputProps): void {
    if (this.props.value && prevProps.value !== this.props.value) {
      // This is the only way that we can update our internal state
      // when the value updates. We check if the value has changed first,
      // preventing an infinite loop.
      //
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState((state) => {
        if (!this.props.value) return state;

        const newState = { ...state };
        const { day, month, year } = this.props.value;
        if (day && day !== state.values.day) newState.values.day = day;
        if (month && month !== state.values.month) newState.values.month = month;
        if (year && year !== state.values.year) newState.values.year = year;

        return newState;
      });
    }
  }

  handleSelectNext = (inputType: 'day' | 'month' | 'year', value: string): void => {
    if (!this.props.autoSelectNext) return;
    if (inputType === 'day' && value.length === 2 && this.monthRef) {
      this.monthRef.focus();
    } else if (inputType === 'month' && value.length === 2 && this.yearRef) {
      this.yearRef.focus();
    }
  };

  handleChange = (
    inputType: 'day' | 'month' | 'year',
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    this.handleSelectNext(inputType, event.target.value);
    event.stopPropagation();
    this.setState((state) => {
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

  registerRef = (inputType: 'day' | 'month' | 'year', ref: HTMLInputElement | null): void => {
    if (inputType === 'month') this.monthRef = ref;
    if (inputType === 'year') this.yearRef = ref;
  };

  render(): JSX.Element {
    const {
      children,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      value,
      defaultValue,
      ...rest
    } = this.props;

    return (
      <FormGroup<Omit<DateInputProps, 'value' | 'defaultValue'>> inputType="dateinput" {...rest}>
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
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
            <div className={classNames('nhsuk-date-input', className)} {...restRenderProps} id={id}>
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
