import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export const RadiosDivider: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-radios__divider', className)} {...rest} />
);

RadiosDivider.displayName = 'Radios.Divider';
