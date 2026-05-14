'use client';

import { createContext } from 'react';

export interface IRadiosContext {
  name: string;
  getRadioId: (reference: string) => string;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
}

export const RadiosContext = createContext<IRadiosContext>({
  name: '',
  getRadioId: () => '',
  leaseReference: () => '',
  unleaseReference: () => {},
});
