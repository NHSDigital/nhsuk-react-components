import { ReactNode, createContext } from 'react';

export interface ITableContext {
  firstCellIsHeader: boolean;
  headings: ReactNode[];
  responsive: boolean;
  setHeadings(headings: ReactNode[]): void;
}

const TableContext = createContext<ITableContext>({
  firstCellIsHeader: false,
  headings: [],
  responsive: false,
  setHeadings: () => {},
});

export default TableContext;
