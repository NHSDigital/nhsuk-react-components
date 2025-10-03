import { createContext } from 'react';

export interface ICheckboxesContext {
  name: string;
  getBoxId: (reference: string) => string | undefined;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

export const CheckboxesContext = createContext<ICheckboxesContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  name: '',
  getBoxId: () => undefined,
  leaseReference: () => '',
  unleaseReference: () => {},
});
