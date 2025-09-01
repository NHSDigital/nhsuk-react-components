import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const RadiosDivider: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);

RadiosDivider.displayName = 'Radios.Divider';

export default RadiosDivider;
