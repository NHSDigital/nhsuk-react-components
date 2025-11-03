'use client';

import classNames from 'classnames';
import { useContext, type ComponentPropsWithoutRef, type FC } from 'react';

import { TableContext, type ITableContext } from '../TableContext.js';
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
