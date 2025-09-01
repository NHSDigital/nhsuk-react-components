import React, { FC, HTMLProps } from 'react';

export type MenuToggleProps = HTMLProps<HTMLButtonElement>;

const MenuToggle: FC<MenuToggleProps> = () => (
  <li className="nhsuk-header__menu" hidden>
    <button
      className="nhsuk-header__menu-toggle nhsuk-header__navigation-link"
      id="toggle-menu"
      aria-expanded="false"
    >
      <span className="nhsuk-u-visually-hidden">Browse </span>More
    </button>
  </li>
);

export default MenuToggle;
