import classNames from 'classnames';
import React, { HTMLProps, MouseEvent, useContext, useEffect } from 'react';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

export interface MenuToggleProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const HeaderMenuToggle: React.FC<MenuToggleProps> = ({ onClick, ...rest }) => {
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
    <div className="nhsuk-header__menu">
      <button
        className={classNames('nhsuk-header__menu-toggle', { 'is-active': menuOpen })}
        aria-label="Open menu"
        aria-expanded={menuOpen ? 'true' : 'false'}
        onClick={onToggleClick}
        {...rest}
      >
        Menu
      </button>
    </div>
  );
};
HeaderMenuToggle.displayName = 'Header.MenuToggle';

export default HeaderMenuToggle;
