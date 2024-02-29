import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const LedeText: FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-lede-text', className)} {...rest} />
);

export default LedeText;
