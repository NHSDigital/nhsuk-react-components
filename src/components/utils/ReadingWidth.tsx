import React from 'react';
import classNames from 'classnames';

const ReadingWidth: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-u-reading-width', className)} {...rest} />
);

export default ReadingWidth;
