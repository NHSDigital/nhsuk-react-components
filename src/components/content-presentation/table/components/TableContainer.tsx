import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

export type TableContainerProps = ComponentPropsWithoutRef<'div'>;

const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  ({ className, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-table-container', className)} ref={forwardedRef} {...rest} />
  ),
);

TableContainer.displayName = 'Table.Container';

export default TableContainer;
