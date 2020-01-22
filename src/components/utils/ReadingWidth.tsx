import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const ReadingWidth: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} {...rest} />
);

export default ReadingWidth;
