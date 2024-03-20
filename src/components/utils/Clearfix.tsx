import React, { FC, HTMLProps } from 'react';

const Clearfix: FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div className="nhsuk-u-clear" {...props} />
);

export default Clearfix;
