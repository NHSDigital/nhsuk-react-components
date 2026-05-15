'use client';

import { type ChangeEvent, createContext } from 'react';

export interface ICheckboxesContext {
  name: string;
  getBoxId: (reference: string) => string | undefined;
  leaseReference: () => string;
  unleaseReference: (reference: string) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxesContext = createContext<ICheckboxesContext>({
  name: '',
  getBoxId: () => undefined,
  leaseReference: () => '',
  unleaseReference: () => {},
  handleChange: () => {},
});
