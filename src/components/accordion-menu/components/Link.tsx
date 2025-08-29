import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const Link: React.FC<HTMLProps<HTMLAnchorElement>> = ({ className, ...rest }) => (
  <div className="nhsuk-accordion-menu__subsection">
    <a className={classNames('nhsuk-accordion-menu__subsection-link', className)} {...rest} />
  </div>
);

export default Link;
