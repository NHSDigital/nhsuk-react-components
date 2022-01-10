import { createContext, useContext } from 'react';

export interface IFormGroupContext {
  isInFormGroup: boolean;
  inputID: string | undefined;
  setInputID: (inputID: string | undefined) => void;
  error: boolean | undefined;
  setError: (error: boolean | undefined) => void;
}

const FormGroupContext = createContext<IFormGroupContext>({
  isInFormGroup: false,
  inputID: undefined,
  setInputID: () => undefined,
  error: false,
  setError: () => undefined,
});

export const useFormGroupContext = (): IFormGroupContext => useContext(FormGroupContext);

export default FormGroupContext;
