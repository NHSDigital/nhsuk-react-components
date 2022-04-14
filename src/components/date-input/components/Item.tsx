import classNames from 'classnames';
import React, { ComponentProps, HTMLProps } from 'react';
import { InputWidth } from '../../../util/types/NHSUKTypes';
import Input from '../../input';
import Label from '../../label';
import { DateInputItemType, useDateInputContext } from '../DateInputContext';

interface DateInputItemProps extends HTMLProps<HTMLInputElement> {
  itemType: DateInputItemType;
  inputWidth: InputWidth;
  labelProps?: ComponentProps<typeof Label>;
}

const DateInputItem = React.forwardRef<HTMLInputElement, DateInputItemProps>((props, ref) => {
  const { id, value, itemType, labelProps, inputWidth, className, ...rest } = props;
  const { parentID, currentValue, handleChange } = useDateInputContext();

  const inputID = id ?? `${parentID}-${props.itemType.toLowerCase()}`;

  return (
    <div className="nhsuk-date-input__item">
      <Input
        {...rest}
        id={inputID}
        ref={ref}
        value={value || currentValue[itemType]}
        label={itemType}
        className={classNames('nhsuk-date-input__input', className)}
        labelProps={{
          ...labelProps,
          className: classNames('nhsuk-date-input__label', labelProps?.className),
        }}
        width={inputWidth}
        onChange={(event) => {
          handleChange(itemType, event);
        }}
      />
    </div>
  );
});
DateInputItem.displayName = 'DateInputItem';
DateInputItem.defaultProps = {
  type: 'text',
  pattern: '[0-9]*',
  inputMode: 'numeric',
};

type SingleDateInputProps = Omit<DateInputItemProps, 'itemType' | 'inputWidth'>;

export const DayInput = React.forwardRef<HTMLInputElement, SingleDateInputProps>((props, ref) => (
  <DateInputItem itemType={DateInputItemType.DAY} inputWidth={2} {...props} ref={ref} />
));
DayInput.displayName = 'DateInput.Day';

export const MonthInput = React.forwardRef<HTMLInputElement, SingleDateInputProps>((props, ref) => (
  <DateInputItem itemType={DateInputItemType.MONTH} inputWidth={2} {...props} ref={ref} />
));
MonthInput.displayName = 'DateInput.Month';

export const YearInput = React.forwardRef<HTMLInputElement, SingleDateInputProps>((props, ref) => (
  <DateInputItem itemType={DateInputItemType.YEAR} inputWidth={4} {...props} ref={ref} />
));
YearInput.displayName = 'DateInput.Year';
