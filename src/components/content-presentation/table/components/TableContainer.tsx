import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const TableContainer: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-table-container', className)} {...rest} />
);
TableContainer.displayName = 'Table.Container';

export default TableContainer;
