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
import { FormElementProps } from '../../util/types/FormTypes';
import { generateRandomName } from '../../util/RandomName';
import LabelBlock from '../../util/LabelBlock';

interface IDateInputContext {
  isDateInput: boolean;
  registerRef: (type: DateInputType, ref: HTMLInputElement | null) => void;
  name: string;
  autoCompletePrefix: string | undefined;
  error?: string | boolean;
}

const DateInputContext = createContext<IDateInputContext>({
  isDateInput: false,
  registerRef: () => undefined,
  name: '',
  autoCompletePrefix: '',
  error: '',
});

type DateInputType = 'Day' | 'Month' | 'Year';
interface DateInputInputProps extends HTMLProps<HTMLInputElement> {
  dateInputType: DateInputType;
  error?: boolean;
}

const DateInputInput: React.FC<DateInputInputProps> = ({
  id,
  className,
  dateInputType,
  autoComplete,
  ...rest
}) => {
  const { isDateInput, registerRef, name, autoCompletePrefix, error } = useContext<
    IDateInputContext
  >(DateInputContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isDateInput) {
      registerRef(dateInputType, inputRef.current);
    }
  }, [inputRef.current]);

  return (
    <div className="nhsuk-date-input__item">
      <div className="nhsuk-form-group">
        <label
          className="nhsuk-label nhsuk-date-input__label"
          htmlFor={id || `${name}-${dateInputType.toLowerCase()}`}
        >
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
            {
              'nhsuk-input--error': typeof rest.error === 'undefined' ? error : rest.error,
            },
            className,
          )}
          id={id || `${name}-${dateInputType.toLowerCase()}`}
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

const DateInputDay: React.FC<Omit<DateInputInputProps, 'dateInputType'>> = props => (
  <DateInputInput dateInputType="Day" {...props} />
);

const DateInputMonth: React.FC<Omit<DateInputInputProps, 'dateInputType'>> = props => (
  <DateInputInput dateInputType="Month" {...props} />
);

const DateInputYear: React.FC<Omit<DateInputInputProps, 'dateInputType'>> = props => (
  <DateInputInput dateInputType="Year" {...props} />
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

interface DateInputProps
  extends Omit<HTMLProps<HTMLDivElement>, 'onChange' | 'value' | 'defaultValue'>,
    FormElementProps {
  autoSelectNext?: boolean;
  onChange?: (e: DateInputEvent) => any;
  autoCompletePrefix?: string;
  value?: DateInputValue;
  defaultValue?: DateInputValue;
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
      name: props.name || generateRandomName('dateinput'),
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
    e.stopPropagation();

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
    const {
      id,
      className,
      children,
      autoSelectNext,
      autoCompletePrefix,
      hint,
      error,
      label,
      onChange,
      labelProps,
      errorProps,
      hintProps,
      value,
      defaultValue,
      ...rest
    } = this.props;
    const { name } = this.state;
    const contextValue = {
      isDateInput: true,
      registerRef: this.registerRef,
      name,
      autoCompletePrefix,
      error,
    };

    return (
      <>
        <LabelBlock
          elementId={id}
          label={label}
          labelProps={labelProps}
          hint={hint}
          hintProps={hintProps}
          error={error}
          errorProps={errorProps}
        />
        <div
          id={id}
          className={classNames('nhsuk-date-input', className)}
          onChange={this.onChange}
          {...rest}
        >
          <DateInputContext.Provider value={contextValue}>
            {children || (
              <>
                <DateInput.Day
                  value={value ? value.day : undefined}
                  defaultValue={defaultValue ? defaultValue.day : undefined}
                />
                <DateInput.Month
                  value={value ? value.month : undefined}
                  defaultValue={defaultValue ? defaultValue.month : undefined}
                />
                <DateInput.Year
                  value={value ? value.year : undefined}
                  defaultValue={defaultValue ? defaultValue.year : undefined}
                />
              </>
            )}
          </DateInputContext.Provider>
        </div>
      </>
    );
  }
}

export default DateInput;
