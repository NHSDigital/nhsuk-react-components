import { createContext } from 'react';

export enum TableSection {
  NONE,
  HEAD,
  BODY,
}

// consider instead of enum
// const TableSection = {
//   NONE: 'NONE',
//   HEAD: 'HEAD',
//   BODY: 'BODY'
// } as const

const TableSectionContext = createContext<TableSection>(TableSection.NONE);

export default TableSectionContext;
