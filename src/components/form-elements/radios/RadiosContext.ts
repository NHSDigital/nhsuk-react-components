'use client';

import { type ChangeEvent, createContext } from 'react';

export interface IRadiosContext {
  name: string;
  getRadioId: (reference: string) => string;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadiosContext = createContext<IRadiosContext>({
  name: '',
  getRadioId: () => '',
  leaseReference: () => '',
  unleaseReference: () => {},
  handleChange: () => {},
});
