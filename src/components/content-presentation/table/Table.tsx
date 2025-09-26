import React, { ComponentPropsWithoutRef, ReactNode, forwardRef, useMemo, useState } from 'react';
import classNames from 'classnames';
import TableBody from './components/TableBody';
import TableCaption, { TableCaptionProps } from './components/TableCaption';
import TableCell from './components/TableCell';
import TableContainer from './components/TableContainer';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TablePanel from './components/TablePanel';
import TableContext, { ITableContext } from './TableContext';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {
  responsive?: boolean;
  caption?: ReactNode;
  captionProps?: TableCaptionProps;
}

const TableComponent = forwardRef<HTMLTableElement, TableProps>((props, forwardedRef) => {
  const { caption, captionProps, children, className, responsive = false, ...rest } = props;

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
        ref={forwardedRef}
        {...rest}
      >
        {caption && <TableCaption {...captionProps}>{caption}</TableCaption>}
        {children}
      </table>
    </TableContext.Provider>
  );
});

TableComponent.displayName = 'Table';

export default Object.assign(TableComponent, {
  Container: TableContainer,
  Panel: TablePanel,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
