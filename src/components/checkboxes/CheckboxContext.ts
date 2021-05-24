import { createContext } from 'react';

export interface ICheckboxContext {
  name: string;
  getBoxId: (reference: string) => string | undefined;
  setConditional: (boxReference: string, hasConditional: boolean) => void;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

export default createContext<ICheckboxContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  name: '',
  getBoxId: () => undefined,
  setConditional: () => {},
  leaseReference: () => '',
  unleaseReference: () => {},
});
