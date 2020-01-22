import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const Hint: React.FC<HTMLProps<HTMLSpanElement>> = ({ className, ...rest }) => (
  <span className={classNames('nhsuk-hint', className)} {...rest}></span>
);

export default Hint;
