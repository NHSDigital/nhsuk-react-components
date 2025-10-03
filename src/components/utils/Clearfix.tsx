import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export const Clearfix: FC<ComponentPropsWithoutRef<'div'>> = (props) => (
  <div className="nhsuk-u-clear" {...props} />
);
