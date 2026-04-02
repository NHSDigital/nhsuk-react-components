'use client';

import { createContext } from 'react';

export interface IFormGroupContext {
  passError: (componentId: string, error: boolean) => void;
  registerComponent: (componentId: string, deregister?: boolean) => void;
}

export const FormGroupContext = createContext<IFormGroupContext>({
  passError: () => {},
  registerComponent: () => {},
});
