import { createContext, useContext } from 'react';

export interface IFormGroupContext {
  isInFormGroup: boolean,
  inputID: string | undefined,
  setInputID: (inputID: string |undefined) => void,
}

const FormGroupContext = createContext<IFormGroupContext>({
  isInFormGroup: false,
  inputID: undefined,
  setInputID: () => {},
});

// eslint-disable-next-line max-len
export const useFormContext = (): IFormGroupContext => useContext<IFormGroupContext>(FormGroupContext);

export default FormGroupContext;
