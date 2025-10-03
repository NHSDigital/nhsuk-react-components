import { createContext } from 'react';

export enum TableSection {
  NONE,
  HEAD,
  BODY,
}

export const TableSectionContext = createContext<TableSection>(TableSection.NONE);
