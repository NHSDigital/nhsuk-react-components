import React from 'react';
import classNames from 'classnames';

const RibbonLinkBar: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-ribbon-link__bar', className)} {...rest} />
);

export default RibbonLinkBar;
