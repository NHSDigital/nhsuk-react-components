import { createContext } from 'react';

export interface IFormContext {
  setError: (name: string, hasError: boolean) => void;
  isForm: boolean;
}

export default createContext<IFormContext>({
  setError: () => {},
  isForm: false,
});
