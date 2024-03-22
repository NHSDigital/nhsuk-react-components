import React, { FC, ComponentProps, HTMLProps, ReactNode, useState } from 'react';
import classNames from 'classnames';
import TableBody from './components/TableBody';
import TableCaption from './components/TableCaption';
import TableCell, { TableCellProps } from './components/TableCell';
import TableContainer from './components/TableContainer';
import TableHead from './components/TableHead';
import TablePanel, { TablePanelProps } from './components/TablePanel';
import TableRow from './components/TableRow';
import TableContext, { ITableContext } from './TableContext';

interface TableProps extends HTMLProps<HTMLTableElement> {
  responsive?: boolean;
  caption?: ReactNode;
  captionProps?: ComponentProps<typeof TableCaption>;
}

interface Table extends FC<TableProps> {
  Body: FC<HTMLProps<HTMLTableSectionElement>>;
  Cell: FC<TableCellProps>;
  Container: FC<HTMLProps<HTMLDivElement>>;
  Head: FC<HTMLProps<HTMLTableSectionElement>>;
  Panel: FC<TablePanelProps>;
  Row: FC<HTMLProps<HTMLTableRowElement>>;
}

const Table: Table = ({
  className,
  responsive = false,
  children,
  caption,
  captionProps,
  ...rest
}) => {
  const [headings, setHeadings] = useState<string[]>([]);
  const contextValue: ITableContext = {
    isResponsive: Boolean(responsive),
    headings,
    setHeadings,
  };

  return (
    <TableContext.Provider value={contextValue}>
      <table
        className={classNames(
          { 'nhsuk-table': !responsive },
          { 'nhsuk-table-responsive': responsive },
          className,
        )}
        {...rest}
      >
        {caption && <TableCaption {...captionProps}>{caption}</TableCaption>}
        {children}
      </table>
    </TableContext.Provider>
  );
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Container = TableContainer;
Table.Head = TableHead;
Table.Panel = TablePanel;
Table.Row = TableRow;

export default Table;
