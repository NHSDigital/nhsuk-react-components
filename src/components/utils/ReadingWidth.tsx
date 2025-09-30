import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const ReadingWidth: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} {...rest} />
);

export default ReadingWidth;
