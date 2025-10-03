import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';
import { type ColWidth } from '#util/types';

export interface ColProps extends ComponentPropsWithoutRef<'div'> {
  width: ColWidth;
}

export const Col: FC<ColProps> = ({ className, width, ...rest }) => (
  <div className={classNames(`nhsuk-grid-column-${width}`, className)} {...rest} />
);
