import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

export type RowProps = ComponentPropsWithoutRef<'div'>;

const Row: FC<RowProps> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-grid-row', className)} {...rest} />
);

export default Row;
