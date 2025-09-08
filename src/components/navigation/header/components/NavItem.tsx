import React from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export interface NavItemProps extends AsElementLink<HTMLAnchorElement> {
  home?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  home,
  className,
  children,
  asElement: Component = 'a',
  ...rest
}) => (
  <li
    className={classNames(
      'nhsuk-header__navigation-item',
      { 'nhsuk-header__navigation-item--home': home },
      className,
    )}
  >
    <Component className="nhsuk-header__navigation-link" {...rest}>
      {children}
    </Component>
  </li>
);

export default NavItem;
