import React, { ComponentProps, HTMLProps, ReactNode, useState } from 'react';
import classNames from 'classnames';
import TableCaption from './components/TableCaption';
import TableContext, { ITableContext } from './TableContext';

interface TableProps extends HTMLProps<HTMLTableElement> {
  responsive?: boolean;
  caption?: ReactNode;
  captionProps?: ComponentProps<typeof TableCaption>;
}

const Table: React.FC<TableProps> = ({ className, responsive = false, children, caption, captionProps, ...rest }) => {
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

export default Table;