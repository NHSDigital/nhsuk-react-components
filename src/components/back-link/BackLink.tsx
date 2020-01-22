import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ChevronLeft } from '../icons';

const BackLink: React.FC<HTMLProps<HTMLAnchorElement>> = ({ children, className, ...rest }) => (
  <div className="nhsuk-back-link">
    <a className={classNames('nhsuk-back-link__link', className)} {...rest}>
      <ChevronLeft />
      {children}
    </a>
  </div>
);

export default BackLink;
