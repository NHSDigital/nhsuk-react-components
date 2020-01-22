import { createContext } from 'react';

export interface ICheckboxContext {
  isCheckbox: boolean;
  name: string;
  getBoxId: () => string | undefined;
}

export default createContext<ICheckboxContext>({
  isCheckbox: false,
  name: '',
  getBoxId: () => undefined,
});
