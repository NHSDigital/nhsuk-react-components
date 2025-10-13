'use client';

import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface IHeaderContext {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<IHeaderContext['menuOpen']>>;
}

export const HeaderContext = createContext<IHeaderContext>({
  menuOpen: false,
  setMenuOpen: () => {},
});
