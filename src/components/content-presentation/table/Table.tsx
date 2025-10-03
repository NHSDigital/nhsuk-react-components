import classNames from 'classnames';
import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import {
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableHead,
  TablePanel,
  TableRow,
  type TableCaptionProps,
} from './components';
import { TableContext, type ITableContext } from '.';

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
  }, [responsive, headings, setHeadings]);

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
  Panel: TablePanel,
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
