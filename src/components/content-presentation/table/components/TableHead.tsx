import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableHead: FC<HTMLProps<HTMLTableSectionElement>> = ({ className, children, ...rest }) => (
  <thead className={classNames('nhsuk-table__head', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.HEAD}>
      {children}
    </TableSectionContext.Provider>
  </thead>
);

TableHead.displayName = 'Table.Head';

export default TableHead;
