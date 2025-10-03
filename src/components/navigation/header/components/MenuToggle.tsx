import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export type MenuToggleProps = ComponentPropsWithoutRef<'button'>;

export const MenuToggle: FC<MenuToggleProps> = (props) => (
  <li className="nhsuk-header__menu" hidden>
    <button
      className="nhsuk-header__menu-toggle nhsuk-header__navigation-link"
      id="toggle-menu"
      aria-expanded="false"
      {...props}
    >
      <span className="nhsuk-u-visually-hidden">Browse </span>More
    </button>
  </li>
);
