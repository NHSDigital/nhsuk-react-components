import { createContext } from 'react';

export interface IFormGroupContext {
  isInsideFormGroup: boolean;
  passError: (id: string, hasError: boolean) => unknown;
}

const FormGroupContext = createContext<IFormGroupContext>({
  isInsideFormGroup: false,
  passError: () => undefined,
});

export default FormGroupContext;
