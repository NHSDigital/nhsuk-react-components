import React, { Children, } from 'react';
import classNames from 'classnames';
import { childIsOfComponentType } from './LocalTypeGuards';
import NavItem from './LocalNavItem';

const Nav: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  id = 'header-navigation',
  ...rest
}) => {
  const primaryLinks = Children.toArray(children).filter((child) =>
    childIsOfComponentType(child, NavItem),
  );
  return (
    <div className="nhsuk-navigation-container">
      <nav
        className={classNames('nhsuk-navigation', className)}
        id={id}
        role="navigation"
        {...rest}
      >
        <ul
          className={classNames('nhsuk-header__navigation-list', {
            'nhsuk-header__navigation-list--left-aligned': primaryLinks.length < 4,
          })}
        >
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
