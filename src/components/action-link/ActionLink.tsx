import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ArrowRightCircle } from '../icons';

const ActionLink: React.FC<HTMLProps<HTMLAnchorElement>> = ({ children, className, ...rest }) => (
  <div className="nhsuk-action-link">
    <a className={classNames('nhsuk-action-link__link', className)} {...rest}>
      <ArrowRightCircle />
      <span className="nhsuk-action-link__text">{children}</span>
    </a>
  </div>
);

export default ActionLink;
