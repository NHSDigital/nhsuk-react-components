import classNames from 'classnames';
import React, { ComponentPropsWithoutRef, FC } from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableBody: FC<ComponentPropsWithoutRef<'tbody'>> = ({ children, className, ...rest }) => (
  <tbody className={classNames('nhsuk-table__body', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.BODY}>
      {children}
    </TableSectionContext.Provider>
  </tbody>
);

TableBody.displayName = 'Table.Body';

export default TableBody;
