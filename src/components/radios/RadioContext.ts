import { createContext } from 'react';

export type IRadiosContext = {
  name: string;
  selectedRadio: string;
  getRadioId: (reference: string) => string;
  setConditional: (radioRef: string, hasConditional: boolean) => void;
  setSelected: (radioRef: string) => void;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
};

export const RadiosContext = createContext<IRadiosContext>({
  name: '',
  selectedRadio: '',
  getRadioId: () => '',
  setConditional: () => {},
  setSelected: () => {},
  leaseReference: () => '',
  unleaseReference: () => {},
});
