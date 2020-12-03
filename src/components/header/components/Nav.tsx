import React, { HTMLProps } from 'react';
import NavTitle from './NavTitle';
import NavItemList from './NavItemList';
import NavMenuCollapse from './NavMenuCollapse';
import NavContainer from './NavContainer';

const Nav: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  open,
  ...rest
}) => (
  <NavContainer open={open} {...rest}>
    <NavTitle>
      <span>Menu</span>
      <NavMenuCollapse />
    </NavTitle>
    <NavItemList>{children}</NavItemList>
  </NavContainer>
);

export default Nav;
