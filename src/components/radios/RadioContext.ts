import { createContext } from 'react';

export interface IRadioContext {
  getRadioId: () => undefined | string;
  name: string | undefined;
}

export default createContext<IRadioContext>({
  getRadioId: () => undefined,
  name: undefined,
});
