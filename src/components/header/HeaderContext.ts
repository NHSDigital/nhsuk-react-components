import { createContext } from 'react';

export interface IHeaderContext {
  orgName: string | undefined;
  serviceName: string | undefined;
  orgSplit: string | undefined;
  orgDescriptor: string | undefined;
  setSearch: (toggle: boolean) => void;
  setMenuToggle: (toggle: boolean) => void;
  toggleMenu: () => void;
  toggleSearch: () => void;
  hasSearch: boolean;
  hasMenuToggle: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
}

export default createContext<IHeaderContext>({
  orgName: undefined,
  serviceName: undefined,
  orgSplit: undefined,
  orgDescriptor: undefined,
  setSearch: () => {},
  setMenuToggle: () => {},
  hasSearch: false,
  hasMenuToggle: false,
  toggleMenu: () => {},
  toggleSearch: () => {},
  menuOpen: false,
  searchOpen: false,
});
