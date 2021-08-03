import { createContext } from 'react';

export enum TableSection {
  NONE,
  HEAD,
  BODY,
}

const TableSectionContext = createContext<TableSection>(TableSection.NONE);

export default TableSectionContext;
