import { createContext } from 'react';

export type IFormGroupContext = {
  passError: (componentId: string, error: boolean) => void;
  registerComponent: (componentId: string, deregister?: boolean) => void;
};

const FormGroupContext = createContext<IFormGroupContext>({
  passError: () => {},
  registerComponent: () => {},
});

export default FormGroupContext;
