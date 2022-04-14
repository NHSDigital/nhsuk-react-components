import React, { ChangeEvent, HTMLProps, useRef, useState } from 'react';
import useFormComponent, { InputType } from '../../util/hooks/UseFormComponent';
import { DayInput, MonthInput, YearInput } from './components/Item';
import DateInputContext, { DateInputItemType } from './DateInputContext';

type DateType = { day: string; month: string; year: string };

type HTMLInputWithDateValue = Omit<HTMLInputElement, 'value'> & {
  value: DateType;
};

interface DateInputProps extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'defaultValue'> {
  value?: DateType;
  defaultValue?: DateType;
  onChange?: (event: ChangeEvent<HTMLInputWithDateValue>) => unknown;
}

// Proxy requires the `object` type as the target
// eslint-disable-next-line @typescript-eslint/ban-types
const proxifyValue = <T extends object>(target: T, proxiedValue: DateType) =>
  new Proxy(target, {
    get: (target, prop) => (prop === 'value' ? proxiedValue : target[prop]),
  });

const useDateInput = (props: DateInputProps) => {
  const { value: valueProp, defaultValue, onChange, ...rest } = props;

  const [value, setValue] = useState<DateType>(valueProp ?? defaultValue);
  const valueRef = useRef<DateType>(value);

  const { renderProps } = useFormComponent(InputType.DATE_INPUT, rest);

  const handleChange = (itemType: DateInputItemType, event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const newValue = { ...valueRef.current };

    switch (itemType) {
      case DateInputItemType.DAY:
        newValue.day = event.target.value;
        break;

      case DateInputItemType.MONTH:
        newValue.month = event.target.value;
        break;

      case DateInputItemType.YEAR:
        newValue.year = event.target.value;
        break;
    }

    valueRef.current = newValue;
    event.target = proxifyValue(event.target, newValue);
    event.currentTarget = proxifyValue(event.currentTarget, newValue);
    setValue(newValue);

    if (onChange) onChange(event as unknown as ChangeEvent<HTMLInputWithDateValue>);
  };

  const currentValue = valueProp ?? value;
  const contextValue = {
    parentID: renderProps.id,
    currentValue: {
      [DateInputItemType.DAY]: currentValue.day,
      [DateInputItemType.MONTH]: currentValue.month,
      [DateInputItemType.YEAR]: currentValue.year,
    },
    handleChange,
  };

  return { contextValue, renderProps };
};

interface IDateInput extends React.FC<DateInputProps> {
  Day: typeof DayInput;
  Month: typeof MonthInput;
  Year: typeof YearInput;
}

const DateInput: IDateInput = (props) => {
  const { contextValue, renderProps } = useDateInput(props);
  const { children, ...rest } = renderProps;

  return (
    <div className="nhsuk-date-input" {...rest}>
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
};

DateInput.Day = DayInput;
DateInput.Month = MonthInput;
DateInput.Year = YearInput;
DateInput.defaultProps = {
  defaultValue: { day: '', month: '', year: '' },
};

export default DateInput;
