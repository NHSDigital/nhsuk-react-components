import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const LedeText: FC<ComponentPropsWithoutRef<'p'>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-lede-text', className)} {...rest} />
);

export default LedeText;
