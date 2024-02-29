import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const Row: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-grid-row', className)} {...rest} />
);

export default Row;
