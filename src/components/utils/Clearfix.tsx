import React, { HTMLProps } from 'react';

const Clearfix: React.FC<HTMLProps<HTMLDivElement>> = props => (
  <div className="nhsuk-u-clear" {...props} />
);

export default Clearfix;
