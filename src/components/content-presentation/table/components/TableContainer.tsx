import classNames from 'classnames';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

export type TableContainerProps = ComponentPropsWithoutRef<'div'>;

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  ({ className, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-table-container', className)} ref={forwardedRef} {...rest} />
  ),
);

TableContainer.displayName = 'Table.Container';
