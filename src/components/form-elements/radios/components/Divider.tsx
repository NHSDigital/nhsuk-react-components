import React from 'react';
import classNames from 'classnames';

const Divider: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);

export default Divider;
