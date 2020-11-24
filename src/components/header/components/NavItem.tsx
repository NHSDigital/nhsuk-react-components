import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ChevronRight as ChevronRightIcon } from '../../icons';

export interface NavItemProps extends HTMLProps<HTMLAnchorElement> {
  asElement?: React.ElementType;
  to?: string;
  mobileOnly?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  mobileOnly,
  className,
  children,
  asElement: Component = 'a',
  ...rest
}) => {
  return (
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
};

export default NavItem;
