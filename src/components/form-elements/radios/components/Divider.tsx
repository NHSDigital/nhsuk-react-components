import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const Divider: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);

export default Divider;
