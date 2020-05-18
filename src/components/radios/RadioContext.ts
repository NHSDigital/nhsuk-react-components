import { createContext } from 'react';

export type IRadiosContext = {
  name: string;
  selectedRadio: string;
  getRadioId: () => string;
  setConditional: (radioRef: string, hasConditional: boolean) => void;
  setSelected: (radioRef: string) => void;
};

export const RadiosContext = createContext<IRadiosContext>({
  name: '',
  selectedRadio: '',
  getRadioId: () => '',
  setConditional: () => {},
  setSelected: () => {},
});
