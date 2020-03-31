import { createContext, useContext } from 'react';

export interface IFormContext {
  setError: (name: string, hasError: boolean) => void;
  isForm: boolean;
}

const FormContext = createContext<IFormContext>({
  setError: () => {},
  isForm: false,
});

export const useFormContext = (): IFormContext => useContext<IFormContext>(FormContext);

export default FormContext;
