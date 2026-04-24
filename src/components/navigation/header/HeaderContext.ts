'use client';

import { type Dispatch, type SetStateAction, createContext } from 'react';

export interface IHeaderContext {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<IHeaderContext['menuOpen']>>;
}

export const HeaderContext = createContext<IHeaderContext>({
  menuOpen: false,
  setMenuOpen: () => {},
});
