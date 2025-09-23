import React, { FC } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export interface NavItemProps extends AsElementLink<HTMLAnchorElement> {
  home?: boolean;
}

const NavItem: FC<NavItemProps> = ({
  home,
  className,
  children,
  asElement: Element = 'a',
  ...rest
}) => (
  <li
    className={classNames(
      'nhsuk-header__navigation-item',
      { 'nhsuk-header__navigation-item--home': home },
      className,
    )}
  >
    <Element className="nhsuk-header__navigation-link" {...rest}>
      {children}
    </Element>
  </li>
);

export default NavItem;
