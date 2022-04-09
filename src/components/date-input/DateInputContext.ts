import { ChangeEvent, createContext, ReactNode } from 'react';

export type IDateInputContext = {
  id: string;
  name: string;
  error: ReactNode | boolean | undefined;
  value?: { day?: string; month?: string; year?: string };
  defaultValue?: { day?: string; month?: string; year?: string };
  handleChange: (inputType: 'day' | 'month' | 'year', event: ChangeEvent<HTMLInputElement>) => void;
};

const DateInputContext = createContext<IDateInputContext>({
  id: '',
  name: '',
  handleChange: () => undefined,
  error: undefined,
});

export default DateInputContext;
