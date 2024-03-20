import React, { FC } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export interface NavItemProps extends AsElementLink<HTMLAnchorElement> {
  mobileOnly?: boolean;
}

const NavItem: FC<NavItemProps> = ({
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
    </Component>
  </li>
);

export default NavItem;
