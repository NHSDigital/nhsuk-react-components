import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const RibbonLinkBar: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-ribbon-link__bar', className)} {...rest} />
);

export default RibbonLinkBar;
