import React, { HTMLProps } from 'react';
import NavTitle from './NavTitle';
import NavItemList from './NavItemList';
import NavMenuClose from './NavMenuClose';
import NavContainer from './NavContainer';

const Nav: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  open,
  ...rest
}) => (
  <NavContainer open={open} className={className} {...rest}>
    <NavTitle>
      <span>Menu</span>
      <NavMenuClose />
    </NavTitle>
    <NavItemList>{children}</NavItemList>
  </NavContainer>
);

export default Nav;
