import { createContext } from 'react';

export interface ICheckboxContext {
  name: string;
  getBoxId: (reference: string) => string | undefined;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

export default createContext<ICheckboxContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  name: '',
  getBoxId: () => undefined,
  leaseReference: () => '',
  unleaseReference: () => {},
});
