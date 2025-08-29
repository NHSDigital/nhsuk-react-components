import React, { FC, HTMLProps, useContext, useEffect } from 'react';
import HeaderContext, { IHeaderContext } from '../HeaderContext';
import { ChevronDownIcon } from './LocalChevronDown';
export interface NavDropdownMenuProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  dropdownText?: string;
}

const NavMenuDropdown: FC<NavDropdownMenuProps> = ({ onClick, dropdownText = 'More', ...rest }) => {
  const { setMenuToggle } = useContext<IHeaderContext>(HeaderContext);

  useEffect(() => {
    setMenuToggle(true);
    return () => setMenuToggle(false);
  }, []);

  return (
    <li className="nhsuk-mobile-menu-container">
      <button
        className="nhsuk-header__menu-toggle nhsuk-header__navigation-link "
        {...rest}
      >
        <span className="nhsuk-u-visually-hidden">Browse</span>
        {dropdownText}
        <ChevronDownIcon />
      </button>
    </li>
  );
};

export default NavMenuDropdown;
