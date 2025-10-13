import { type ComponentPropsWithoutRef, type FC } from 'react';

export type HeaderMenuToggleProps = ComponentPropsWithoutRef<'button'>;

export const HeaderMenuToggle: FC<HeaderMenuToggleProps> = (props) => (
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
