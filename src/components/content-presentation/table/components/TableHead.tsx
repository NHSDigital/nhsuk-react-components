import React, { ComponentPropsWithoutRef, FC, useContext } from 'react';
import classNames from 'classnames';
import TableContext, { ITableContext } from '../TableContext';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableHead: FC<ComponentPropsWithoutRef<'thead'>> = ({ children, className, ...rest }) => {
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

export default TableHead;
