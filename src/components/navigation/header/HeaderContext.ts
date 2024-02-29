import { createContext } from 'react';

export interface IHeaderContext {
  orgName: string | undefined;
  serviceName: string | undefined;
  orgSplit: string | undefined;
  orgDescriptor: string | undefined;
  setSearch: (toggle: boolean) => void;
  setMenuToggle: (toggle: boolean) => void;
  toggleMenu: () => void;
  hasSearch: boolean;
  hasMenuToggle: boolean;
  menuOpen: boolean;
  transactional: boolean;
}

export default createContext<IHeaderContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  orgName: undefined,
  serviceName: undefined,
  orgSplit: undefined,
  orgDescriptor: undefined,
  setSearch: () => {},
  setMenuToggle: () => {},
  hasSearch: false,
  hasMenuToggle: false,
  toggleMenu: () => {},
  menuOpen: false,
  transactional: false,
});
