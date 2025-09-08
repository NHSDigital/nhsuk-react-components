import React from 'react';
import classNames from 'classnames';

const TableContainer: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-table-container', className)} {...rest} />
);
TableContainer.displayName = 'Table.Container';

export default TableContainer;
