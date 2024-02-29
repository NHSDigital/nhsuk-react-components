import React from 'react';
import classNames from 'classnames';
import { ChevronRight as ChevronRightIcon } from '../../../icons';
import type { AsElementLink } from '../../../../util/types/LinkTypes';

export interface NavItemProps extends AsElementLink<HTMLAnchorElement> {
  mobileOnly?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  mobileOnly,
  className,
  children,
  asElement: Component = 'a',
  ...rest
}) => (
  <li
    className={classNames(
      'nhsuk-header__navigation-item',
      { 'nhsuk-header__navigation-item--for-mobile': mobileOnly },
      className,
    )}
  >
    <Component className="nhsuk-header__navigation-link" {...rest}>
      {children}
      <ChevronRightIcon />
    </Component>
  </li>
);

export default NavItem;
