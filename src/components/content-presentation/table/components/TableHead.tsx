'use client';

import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, useContext } from 'react';

import { type ITableContext, TableContext } from '../TableContext.js';
import { TableSection, TableSectionContext } from '../TableSectionContext.js';

export type TableHeadProps = ComponentPropsWithoutRef<'thead'>;

export const TableHead: FC<TableHeadProps> = ({ children, className, ...rest }) => {
  const { responsive } = useContext<ITableContext>(TableContext);

  return (
    <thead
      className={classNames('nhsuk-table__head', className)}
      role={responsive ? 'rowgroup' : undefined}
      {...rest}
    >
      <TableSectionContext.Provider value={TableSection.HEAD}>
        {children}
      </TableSectionContext.Provider>
    </thead>
  );
};

TableHead.displayName = 'Table.Head';
