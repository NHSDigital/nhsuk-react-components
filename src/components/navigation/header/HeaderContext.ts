import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface IHeaderContext {
  logo?: {
    href?: string;
    src?: string;
    'aria-label'?: string;
  };
  service?: {
    href?: string;
    text?: string;
  };
  organisation?: {
    name?: string;
    split?: string;
    descriptor?: string;
  };
  setLogo: Dispatch<SetStateAction<IHeaderContext['logo']>>;
  setService: Dispatch<SetStateAction<IHeaderContext['service']>>;
  setOrganisation: Dispatch<SetStateAction<IHeaderContext['organisation']>>;
}

export default createContext<IHeaderContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  logo: undefined,
  service: undefined,
  organisation: undefined,
  setLogo: () => {},
  setService: () => {},
  setOrganisation: () => {},
});
