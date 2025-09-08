import React from 'react';
import classNames from 'classnames';

const Row: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-grid-row', className)} {...rest} />
);

export default Row;
