import classNames from 'classnames';
import React from 'react';
import useDateInput, { DateInputChangeEvent, DateInputValue } from '../../util/hooks/UseDateInput';
import useFormGroup from '../../util/hooks/UseFormGroup';
import LabelBlock from '../../util/LabelBlock';
import { FormElementProps, InputType } from '../../util/types/FormTypes';
import { DayInput, MonthInput, YearInput } from './components/IndividualDateInputs';
import DateInputContext, { IDateInputContext } from './DateInputContext';

interface DateInputProps extends Omit<FormElementProps<HTMLDivElement>, 'value' | 'defaultValue'> {
  value?: Partial<DateInputValue>;
  defaultValue?: Partial<DateInputValue>;
  onChange?: (e: DateInputChangeEvent) => void;
}

interface IDateInput extends React.FC<DateInputProps> {
  Day: typeof DayInput;
  Month: typeof MonthInput;
  Year: typeof YearInput;
}

const DateInput: IDateInput = (props) => {
  const { FormGroup, renderProps } = useFormGroup(InputType.DATE_INPUT, props);

  const {
    className,
    children,
    id,
    name,
    value,
    defaultValue,
    onChange,
    label,
    labelProps,
    hint,
    hintProps,
    error,
    errorProps,
    ...rest
  } = renderProps;

  const dateInputFuncs = useDateInput(value, defaultValue, onChange);

  const contextValue: IDateInputContext = {
    id,
    name,
    error,
    value,
    defaultValue,
    ...dateInputFuncs,
  };

  return (
    <FormGroup>
      <LabelBlock
        elementId={renderProps.id}
        label={label}
        labelProps={labelProps}
        hint={hint}
        hintProps={hintProps}
        error={error}
        errorProps={errorProps}
      />
      <div className={classNames('nhsuk-date-input', className)} id={id} {...rest}>
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
    </FormGroup>
  );
};

DateInput.Day = DayInput;
DateInput.Month = MonthInput;
DateInput.Year = YearInput;

export default DateInput;
