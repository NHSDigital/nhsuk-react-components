import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const TableContainer: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-table-container', className)} {...rest} />
);

TableContainer.displayName = 'Table.Container';

export default TableContainer;
