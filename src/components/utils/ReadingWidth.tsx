import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const ReadingWidth: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} {...rest} />
);

export default ReadingWidth;
