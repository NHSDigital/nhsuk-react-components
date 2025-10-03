import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export const ReadingWidth: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} {...rest} />
);
