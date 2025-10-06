import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface IHeaderContext {
  logoProps?: {
    'href'?: string;
    'src'?: string;
    'alt'?: string;
    'aria-label'?: string;
  };
  serviceProps?: {
    href?: string;
    text?: string;
  };
  organisationProps?: {
    name?: string;
    split?: string;
    descriptor?: string;
  };
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<IHeaderContext['menuOpen']>>;
  setLogoProps: Dispatch<SetStateAction<IHeaderContext['logoProps']>>;
  setServiceProps: Dispatch<SetStateAction<IHeaderContext['serviceProps']>>;
  setOrganisationProps: Dispatch<SetStateAction<IHeaderContext['organisationProps']>>;
}

export const HeaderContext = createContext<IHeaderContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  logoProps: undefined,
  serviceProps: undefined,
  organisationProps: undefined,
  menuOpen: false,
  setMenuOpen: () => {},
  setLogoProps: () => {},
  setServiceProps: () => {},
  setOrganisationProps: () => {},
});
