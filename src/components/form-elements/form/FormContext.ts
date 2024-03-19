'use client';
import { createContext, useContext } from 'react';

export interface IFormContext {
  disableErrorFromComponents: boolean;
}

const FormContext = createContext<IFormContext>({
  disableErrorFromComponents: false,
});

export const useFormContext = (): IFormContext => useContext<IFormContext>(FormContext);

export default FormContext;
