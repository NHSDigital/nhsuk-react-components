import { createContext } from 'react';

export interface ICheckboxContext {
  name: string;
  getBoxId: () => string | undefined;
  setConditional: (boxReference: string, hasConditional: boolean) => void;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

export default createContext<ICheckboxContext>({
  name: '',
  getBoxId: () => undefined,
  setConditional: () => {},
  leaseReference: () => '',
  unleaseReference: () => {},
});
