'use client';

import classNames from 'classnames';
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useMemo,
  useState,
} from 'react';

import { type Card as _Card } from '#components/navigation/card/index.js';

import { type ITableContext, TableContext } from './TableContext.js';
import {
  TableBody,
  TableCaption,
  type TableCaptionProps,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from './components/index.js';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {
  firstCellIsHeader?: boolean;
  responsive?: boolean;
  caption?: ReactNode;
  captionProps?: TableCaptionProps;
}

const TableComponent = forwardRef<HTMLTableElement, TableProps>((props, forwardedRef) => {
  const {
    caption,
    captionProps,
    children,
    className,
    firstCellIsHeader = false,
    responsive = false,
    ...rest
  } = props;

  const [headings, setHeadings] = useState<ReactNode[]>([]);

  const contextValue: ITableContext = useMemo(() => {
    return {
      firstCellIsHeader,
      headings,
      responsive,
      setHeadings,
    };
  }, [firstCellIsHeader, headings, responsive, setHeadings]);

  return (
    <TableContext.Provider value={contextValue}>
      <table
        className={classNames(
          { 'nhsuk-table': !responsive },
          { 'nhsuk-table-responsive': responsive },
          className,
        )}
        role={responsive ? 'table' : undefined}
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

export const Table = Object.assign(TableComponent, {
  Container: TableContainer,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
