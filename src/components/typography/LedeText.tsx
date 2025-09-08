import React from 'react';
import classNames from 'classnames';

const LedeText: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-lede-text', className)} {...rest} />
);

export default LedeText;
