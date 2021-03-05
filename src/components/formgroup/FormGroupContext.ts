import { createContext, useContext } from 'react';

export interface IFormGroupContext {
  isInFormGroup: boolean;
  inputID: string | undefined;
  setInputID: (inputID: string | undefined) => void;
  error: boolean | undefined;
  setError: (error: boolean | undefined) => void;
  disableErrorFromComponents: boolean;
}

export const FormGroupContext = createContext<IFormGroupContext>({
  isInFormGroup: false,
  inputID: undefined,
  setInputID: () => {},
  error: false,
  setError: () => {},
  disableErrorFromComponents: false,
});

// eslint-disable-next-line max-len
export const useFormGroupContext = (): IFormGroupContext =>
  useContext<IFormGroupContext>(FormGroupContext);

export default FormGroupContext;
