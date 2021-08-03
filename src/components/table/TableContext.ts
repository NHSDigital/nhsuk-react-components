import { createContext } from 'react';

export interface ITableContext {
  isResponsive: boolean;
  headings: string[];
  setHeadings(headings: string[]): void;
}

const TableContext = createContext<ITableContext>({
  /* eslint-disable @typescript-eslint/no-empty-function */
  isResponsive: false,
  headings: [],
  setHeadings: () => {},
});

export default TableContext;
