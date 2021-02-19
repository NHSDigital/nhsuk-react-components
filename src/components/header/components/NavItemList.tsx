import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const NavItemList: React.FC<HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...rest
}) => (
  <ul
    className={classNames(
      'nhsuk-header__navigation-list',
      className,
    )}
    {...rest}
  >
    {children}
  </ul>
);

export default NavItemList;
