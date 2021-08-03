import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableBody: React.FC<HTMLProps<HTMLTableSectionElement>> = ({
  className,
  children,
  ...rest
}) => (
  <tbody className={classNames('nhsuk-table__body', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.BODY}>
      {children}
    </TableSectionContext.Provider>
  </tbody>
);
TableBody.displayName = 'Table.Body';

export default TableBody;
