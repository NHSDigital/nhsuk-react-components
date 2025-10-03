import { createContext, type ReactNode } from 'react';

export interface ITableContext {
  firstCellIsHeader: boolean;
  headings: ReactNode[];
  responsive: boolean;
  setHeadings(headings: ReactNode[]): void;
}

export const TableContext = createContext<ITableContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  firstCellIsHeader: false,
  headings: [],
  responsive: false,
  setHeadings: () => {},
});
