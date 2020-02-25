import React, {
  HTMLProps,
  PureComponent,
  createContext,
  useEffect,
  useContext,
  useRef,
  SyntheticEvent,
} from 'react';
import classNames from 'classnames';
import ErrorMessage from '../error-message';
import Hint from '../hint';
import Label from '../label';

interface IDateInputContext {
  isDateInput: boolean;
  registerRef: (type: DateInputType, ref: HTMLInputElement | null) => void;
  name: string;
  autoCompletePrefix: string | undefined;
}

const DateInputContext = createContext<IDateInputContext>({
  isDateInput: false,
  registerRef: () => {},
  name: '',
  autoCompletePrefix: '',
});

type DateInputType = 'Day' | 'Month' | 'Year';
interface DateInputInputProps extends HTMLProps<HTMLInputElement> {
  dateInputType: DateInputType;
  error?: string;
}

const DateInputInput: React.FC<DateInputInputProps> = ({
  id,
  className,
  dateInputType,
  autoComplete,
  error,
  ...rest
}) => {
  const { isDateInput, registerRef, name, autoCompletePrefix } = useContext<IDateInputContext>(
    DateInputContext,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isDateInput) {
      registerRef(dateInputType, inputRef.current);
    }
  }, [inputRef.current]);

  return (
    <div className="nhsuk-date-input__item">
      <div className="nhsuk-form-group">
        <label className="nhsuk-label nhsuk-date-input__label" htmlFor={id}>
          {dateInputType}
        </label>
        <input
          className={classNames(
            'nhsuk-input nhsuk-date-input__input',
            {
              'nhsuk-input--width-2': dateInputType === 'Day' || dateInputType === 'Month',
            },
            {
              'nhsuk-input--width-4': dateInputType === 'Year',
            },
            error ? "nhsuk-input--error" : "",
            className,
          )}
          id={`${name}-${dateInputType.toLowerCase()}`}
          aria-label={`${name}-${dateInputType.toLowerCase()} input`}
          autoComplete={
            autoComplete || autoCompletePrefix
              ? `${autoCompletePrefix}-${dateInputType.toLowerCase()}`
              : undefined
          }
          name={rest.name ? rest.name : `${name}-${dateInputType.toLowerCase()}`}
          ref={inputRef}
          {...rest}
        />
      </div>
    </div>
  );
};

DateInputInput.defaultProps = {
  type: 'number',
  pattern: '[0-9]*',
};


interface DateInputComponent extends HTMLProps<HTMLInputElement> {
  error?: string
}

const DateInputDay: React.FC<DateInputComponent>  = props => (
  <DateInputInput dateInputType="Day" error={props.error} {...props} />
);

const DateInputMonth: React.FC<DateInputComponent> = props => (
  <DateInputInput dateInputType="Month" error={props.error} {...props}/>
);

const DateInputYear: React.FC<DateInputComponent> = props => (
  <DateInputInput dateInputType="Year" error={props.error} {...props}/>
);

interface DateInputTargetElement extends Omit<HTMLInputElement, 'value'> {
  value: DateInputValue;
}

interface DateInputEvent extends SyntheticEvent<DateInputTargetElement> {
  target: DateInputTargetElement;
  currentTarget: DateInputTargetElement;
}

type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

interface DateInputProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  autoSelectNext?: boolean;
  onChange?: (e: DateInputEvent) => any;
  autoCompletePrefix?: string;
  error?: string;
  hint?: string;
  labelHtmlFor?: string;
}

type DateInputState = {
  name: string;
  value: DateInputValue;
};

interface DateInput extends PureComponent<DateInputProps, DateInputState> {
  monthRef: HTMLInputElement | null;
  yearRef: HTMLInputElement | null;
}

class DateInput extends PureComponent<DateInputProps, DateInputState> {
  constructor(props: DateInputProps, ...rest: any[]) {
    super(props, ...rest);
    this.state = {
      name: props.name || `dateinput_${(Math.random() + 1).toString(36).substring(2, 7)}`,
      value: { day: '', month: '', year: '' },
    };
    this.monthRef = null;
    this.yearRef = null;
  }

  registerRef = (type: DateInputType, ref: HTMLInputElement | null) => {
    if (ref !== null) {
      if (type === 'Month') {
        this.monthRef = ref;
      } else if (type === 'Year') {
        this.yearRef = ref;
      }
    }
  };

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value, name } = this.state;
    if (target && target.name) {
      const inputType = target.name.split('-').pop();
      if (inputType === 'day') {
        value.day = target.value;
      } else if (inputType === 'month') {
        value.month = target.value;
      } else if (inputType === 'year') {
        value.year = target.value;
      }
      if (this.props.autoSelectNext) {
        this.autoSelectNext(value, inputType);
      }
    }
    const newEvent: DateInputEvent = {
      ...e,
      target: { ...target, name, value },
      currentTarget: { ...target, name, value },
    };
    if (this.props.onChange) {
      this.props.onChange(newEvent);
    }
  };

  autoSelectNext = (value: DateInputValue, inputType: string | undefined) => {
    if (inputType === 'day' && value.day.length === 2 && this.monthRef) {
      this.monthRef.focus();
    }
    if (inputType === 'month' && value.month.length === 2 && this.yearRef) {
      this.yearRef.focus();
    }
  };

  static Day = DateInputDay;

  static Month = DateInputMonth;

  static Year = DateInputYear;

  render() {
    const { className, children, autoSelectNext, autoCompletePrefix, labelHtmlFor, hint, ...rest } = this.props;
    const { name } = this.state;
    const contextValue = {
      isDateInput: true,
      registerRef: this.registerRef,
      name,
      autoCompletePrefix,
    };

    return (
      <>
      {this.props.label ? <Label htmlFor={labelHtmlFor}>{this.props.label}</Label> : "null"}
      {this.props.hint ? <Hint>{this.props.hint}</Hint> : "null"}
      {this.props.error ? <ErrorMessage>{this.props.error}</ErrorMessage> : "null"}
      <div className={classNames('nhsuk-date-input', className)} {...rest} onChange={this.onChange}>
        <DateInputContext.Provider value={contextValue}>
          {children || (
            <>
              <DateInput.Day error={this.props.error}/>
              <DateInput.Month error={this.props.error}/>
              <DateInput.Year error={this.props.error} />
            </>
          )}
        </DateInputContext.Provider>
      </div>
      </>
    );
  }
}

export default DateInput;
