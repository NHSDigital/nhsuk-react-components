import React, { createContext, FormEvent, useContext } from 'react';

export enum DateInputItemType {
  DAY = 'Day',
  MONTH = 'Month',
  YEAR = 'Year',
}

interface IDateInputContext {
  parentID: string;
  currentValue: Record<DateInputItemType, string>;
  handleChange(itemType: DateInputItemType, event: FormEvent<HTMLInputElement>): void;
}

const DateInputContext = createContext<IDateInputContext>({
  parentID: '',
  currentValue: {
    [DateInputItemType.DAY]: '',
    [DateInputItemType.MONTH]: '',
    [DateInputItemType.YEAR]: '',
  },
  handleChange: () => undefined,
});

export const useDateInputContext = (): IDateInputContext => useContext(DateInputContext);

export const DateInputContextProvider: React.FC<{ contextValue: IDateInputContext }> = ({
  children,
  contextValue,
}) => <DateInputContext.Provider value={contextValue}>{children}</DateInputContext.Provider>;

export default DateInputContext;
