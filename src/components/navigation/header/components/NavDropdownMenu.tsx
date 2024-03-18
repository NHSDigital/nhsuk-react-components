'use client';
import React, { HTMLProps, useContext, useEffect, MouseEvent } from 'react';
import HeaderContext, { IHeaderContext } from '../HeaderContext';
import { ChevronDown as ChevronDownIcon } from '@components/icons';

export interface NavDropdownMenuProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  dropdownText?: string;
}

const NavMenuDropdown: React.FC<NavDropdownMenuProps> = ({
  onClick,
  dropdownText = 'More',
  ...rest
}) => {
  const { setMenuToggle, toggleMenu, menuOpen } = useContext<IHeaderContext>(HeaderContext);

  const onToggleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleMenu();

    if (onClick) {
      onClick(e);
    }
  };

  useEffect(() => {
    setMenuToggle(true);
    return () => setMenuToggle(false);
  }, []);

  return (
    <li className="nhsuk-mobile-menu-container">
      <button
        className="nhsuk-header__menu-toggle nhsuk-header__navigation-link "
        aria-expanded={menuOpen ? 'true' : 'false'}
        onClick={onToggleClick}
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
