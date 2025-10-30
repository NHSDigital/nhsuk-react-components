'use client';

import { createContext, type ChangeEvent } from 'react';

export type IDateInputContext = {
  id: string;
  name: string;
  error: React.ReactNode | undefined;
  value?: { day?: string; month?: string; year?: string };
  defaultValue?: { day?: string; month?: string; year?: string };
  handleChange: (inputType: 'day' | 'month' | 'year', event: ChangeEvent<HTMLInputElement>) => void;
};

export const DateInputContext = createContext<IDateInputContext>({
  id: '',
  name: '',
  handleChange: () => {},
  error: undefined,
});
