import classNames from 'classnames';
import React, { HTMLProps } from 'react';

const RadiosDivider: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);
RadiosDivider.displayName = 'Radios.Divider';

export default RadiosDivider;
