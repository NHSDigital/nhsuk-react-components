'use client';

import { type ChangeEvent, type ReactElement, createContext } from 'react';

export interface IDateInputContext {
  id: string;
  name: string;
  error: string | ReactElement | undefined;
  value?: { day?: string; month?: string; year?: string };
  defaultValue?: { day?: string; month?: string; year?: string };
  handleChange: (inputType: 'day' | 'month' | 'year', event: ChangeEvent<HTMLInputElement>) => void;
}

export const DateInputContext = createContext<IDateInputContext>({
  id: '',
  name: '',
  handleChange: () => {},
  error: undefined,
});
