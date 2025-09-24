import React, { ComponentPropsWithoutRef, FC } from 'react';

const Clearfix: FC<ComponentPropsWithoutRef<'div'>> = (props) => (
  <div className="nhsuk-u-clear" {...props} />
);

export default Clearfix;
