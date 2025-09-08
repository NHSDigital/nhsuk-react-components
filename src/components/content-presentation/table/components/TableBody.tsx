import classNames from 'classnames';
import React from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableBody: React.FC<React.HTMLProps<HTMLTableSectionElement>> = ({ className, children, ...rest }) => (
  <tbody className={classNames('nhsuk-table__body', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.BODY}>
      {children}
    </TableSectionContext.Provider>
  </tbody>
);
TableBody.displayName = 'Table.Body';

export default TableBody;
