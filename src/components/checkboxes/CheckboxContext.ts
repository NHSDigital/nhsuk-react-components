import { createContext, useContext } from 'react';

export interface ICheckboxContext {
  name: string;
  getBoxId: (reference: string) => string | undefined;
  setConditional: (boxReference: string, hasConditional: boolean) => void;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

const CheckboxContext = createContext<ICheckboxContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  name: '',
  getBoxId: () => undefined,
  setConditional: () => {},
  leaseReference: () => '',
  unleaseReference: () => {},
});

export const useCheckboxContext = (): ICheckboxContext => useContext(CheckboxContext);

export default CheckboxContext;
