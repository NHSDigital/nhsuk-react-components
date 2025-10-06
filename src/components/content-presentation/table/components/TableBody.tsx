import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { TableSection, TableSectionContext } from '../TableSectionContext';

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;

export const TableBody: FC<TableBodyProps> = ({ children, className, ...rest }) => (
  <tbody className={classNames('nhsuk-table__body', className)} {...rest}>
    <TableSectionContext.Provider value={TableSection.BODY}>
      {children}
    </TableSectionContext.Provider>
  </tbody>
);

TableBody.displayName = 'Table.Body';
