import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import TableBody from './components/TableBody';
import TableCaption from './components/TableCaption';
import TableCell, { TableCellProps } from './components/TableCell';
import TableContainer from './components/TableContainer';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TablePanel, { TablePanelProps } from './components/TablePanel';
import TableContext, { ITableContext } from './TableContext';

interface TableProps extends React.HTMLProps<HTMLTableElement> {
  responsive?: boolean;
  caption?: React.ReactNode;
  captionProps?: React.ComponentProps<typeof TableCaption>;
}

interface Table extends React.FC<TableProps> {
  Body: React.FC<React.HTMLProps<HTMLTableSectionElement>>;
  Cell: React.FC<TableCellProps>;
  Container: React.FC<React.HTMLProps<HTMLDivElement>>;
  Head: React.FC<React.HTMLProps<HTMLTableSectionElement>>;
  Panel: React.FC<TablePanelProps>;
  Row: React.FC<React.HTMLProps<HTMLTableRowElement>>;
}

const Table = ({
  caption,
  captionProps,
  children,
  className,
  responsive = false,
  ...rest
}: TableProps) => {
  const [headings, setHeadings] = useState<string[]>([]);

  const contextValue: ITableContext = useMemo(() => {
    return {
      isResponsive: Boolean(responsive),
      headings,
      setHeadings,
    };
  }, [responsive, headings, setHeadings]);

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
