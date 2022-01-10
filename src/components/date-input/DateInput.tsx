import classNames from 'classnames';
import React from 'react';
import useDateInput, { DateInputChangeEvent, DateInputValue } from '../../util/hooks/UseDateInput';
import useFormGroup from '../../util/hooks/UseFormGroup';
import { FormElementProps, FormGroupConsumer } from '../../util/types/FormTypes';
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
  const group = useFormGroup<DateInputProps>(FormGroupConsumer.DATE_INPUT, props);

  const dateInputFuncs = useDateInput(
    group.renderProps.value,
    group.renderProps.defaultValue,
    group.renderProps.onChange,
  );

  const {
    className,
    id,
    name,
    error,
    value,
    defaultValue,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange: _,
    ...restRenderProps
  } = group.renderProps;

  const contextValue: IDateInputContext = {
    id,
    name,
    error,
    value,
    defaultValue,
    ...dateInputFuncs,
  };

  return (
    <group.Wrapper {...group.wrapperProps}>
      {group.LabelBlock}
      <div className={classNames('nhsuk-date-input', className)} id={id} {...restRenderProps}>
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
    </group.Wrapper>
  );
};

DateInput.Day = DayInput;
DateInput.Month = MonthInput;
DateInput.Year = YearInput;

export default DateInput;
