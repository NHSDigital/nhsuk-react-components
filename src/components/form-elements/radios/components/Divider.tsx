import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const RadiosDivider: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);

RadiosDivider.displayName = 'Radios.Divider';

export default RadiosDivider;
