import { createContext, ChangeEvent } from 'react';

export type IDateInputContext = {
  id: string;
  name: string;
  error: string | boolean | undefined;
  value?: { day?: string; month?: string; year?: string };
  defaultValue?: { day?: string; month?: string; year?: string };
  registerRef: (inputType: 'day' | 'month' | 'year', ref: null | HTMLInputElement) => void;
  handleChange: (inputType: 'day' | 'month' | 'year', event: ChangeEvent<HTMLInputElement>) => void;
};

const DateInputContext = createContext<IDateInputContext>({
  id: '',
  name: '',
  registerRef: () => {},
  handleChange: () => {},
  error: undefined,
});

export default DateInputContext;
