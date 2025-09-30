import { createContext, ChangeEvent } from 'react';

export type IDateInputContext = {
  id: string;
  name: string;
  error: string | undefined;
  value?: { day?: string; month?: string; year?: string };
  defaultValue?: { day?: string; month?: string; year?: string };
  handleChange: (inputType: 'day' | 'month' | 'year', event: ChangeEvent<HTMLInputElement>) => void;
};

const DateInputContext = createContext<IDateInputContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  id: '',
  name: '',
  handleChange: () => {},
  error: undefined,
});

export default DateInputContext;
