import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export type RowProps = ComponentPropsWithoutRef<'div'>;

export const Row: FC<RowProps> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-grid-row', className)} {...rest} />
);
