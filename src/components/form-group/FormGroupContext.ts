import { createContext, useContext } from 'react';

export interface IFormGroupContext {
  isInFormGroup: boolean;
  inputID: string | undefined;
  setInputID: (inputID: string | undefined) => void;
  error: boolean | undefined;
  setError: (error: boolean | undefined) => void;
  getLabelID: (id?: string) => string;
  getHintID: (id?: string) => string;
  getErrorMessageID: (id?: string) => string;
}

const FormGroupContext = createContext<IFormGroupContext>({
  isInFormGroup: false,
  inputID: undefined,
  error: false,
  setInputID: () => undefined,
  setError: () => undefined,
  getLabelID: (id) => id,
  getHintID: (id) => id,
  getErrorMessageID: (id) => id,
});

export const useFormGroupContext = (): IFormGroupContext => useContext(FormGroupContext);

export default FormGroupContext;
