import { createContext } from 'react';

export interface ITableContext {
  isResponsive: boolean;
  headings: string[];
  setHeadings(headings: string[]): void;
}

const TableContext = createContext<ITableContext>({
  isResponsive: false,
  headings: [],
  setHeadings: () => {},
});

export default TableContext;
