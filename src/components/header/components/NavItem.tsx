import classNames from 'classnames';
import React from 'react';
import type { AsElementLink } from '../../../util/types/LinkTypes';
import { ChevronRight as ChevronRightIcon } from '../../icons';

export interface NavItemProps extends AsElementLink<HTMLAnchorElement> {
  mobileOnly?: boolean;
}

const HeaderNavItem: React.FC<NavItemProps> = ({
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
HeaderNavItem.displayName = 'Header.NavItem';

export default HeaderNavItem;
