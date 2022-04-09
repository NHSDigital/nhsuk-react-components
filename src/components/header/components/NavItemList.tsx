import classNames from 'classnames';
import React, { HTMLProps } from 'react';

const HeaderNavItemList: React.FC<HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...rest
}) => (
  <ul className={classNames('nhsuk-header__navigation-list', className)} {...rest}>
    {children}
  </ul>
);
HeaderNavItemList.displayName = 'Header.NavItemList';

export default HeaderNavItemList;
