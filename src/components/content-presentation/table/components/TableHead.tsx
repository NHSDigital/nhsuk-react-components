import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableHead: FC<ComponentPropsWithoutRef<'thead'>> = ({ children, className, ...rest }) => (
  <thead className={classNames('nhsuk-table__head', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.HEAD}>
      {children}
    </TableSectionContext.Provider>
  </thead>
);

TableHead.displayName = 'Table.Head';

export default TableHead;
