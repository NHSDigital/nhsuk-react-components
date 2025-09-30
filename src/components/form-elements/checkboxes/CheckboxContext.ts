import { createContext } from 'react';

export interface ICheckboxContext {
  name: string;
  getBoxId: (reference: string) => string | undefined;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

export default createContext<ICheckboxContext>({
  name: '',
  getBoxId: () => undefined,
  leaseReference: () => '',
  unleaseReference: () => {},
});
