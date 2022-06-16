import classNames from 'classnames';
import React, { HTMLProps } from 'react';

const Divider: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-checkboxes__divider', className)} {...rest} />
);
Divider.displayName = 'Checkboxes.Divider';

export default Divider;
