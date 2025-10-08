'use client';

import { createContext, useContext } from 'react';

export interface IFormContext {
  disableErrorFromComponents: boolean;
}

export const FormContext = createContext<IFormContext>({
  disableErrorFromComponents: false,
});

export const useFormContext = (): IFormContext => useContext<IFormContext>(FormContext);
