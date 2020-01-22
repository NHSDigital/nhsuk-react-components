import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ChevronRight as ChevronRightIcon } from '../../icons';

export interface NavItemProps extends HTMLProps<HTMLAnchorElement> {
  mobileOnly?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ mobileOnly, className, children, ...rest }) => (
  <li
    className={classNames(
      'nhsuk-header__navigation-item',
      { 'nhsuk-header__navigation-item--for-mobile': mobileOnly },
      className,
    )}
  >
    <a className="nhsuk-header__navigation-link" {...rest}>
      {children}
      <ChevronRightIcon />
    </a>
  </li>
);

export default NavItem;
