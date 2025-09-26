import React, { FC, HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Container } from '@components/layout';
import HeaderContext, { IHeaderContext } from '../HeaderContext';
import MenuToggle from './MenuToggle';

export interface NavigationProps extends HTMLProps<HTMLDivElement> {
  white?: boolean;
  open?: boolean;
}

const Navigation: FC<NavigationProps> = ({
  className,
  children,
  white,
  open,
  'aria-label': ariaLabel = 'Menu',
  ...rest
}) => {
  const { setMenuOpen } = useContext<IHeaderContext>(HeaderContext);

  useEffect(() => {
    if (open === undefined) {
      return;
    }

    setMenuOpen(open);
    return () => setMenuOpen(false);
  }, [open]);

  return (
    <nav
      className={classNames(
        'nhsuk-header__navigation',
        { 'nhsuk-header__navigation--white': !!white },
        className,
      )}
      aria-label={ariaLabel}
      {...rest}
    >
      <Container className="nhsuk-header__navigation-container">
        <ul className="nhsuk-header__navigation-list">
          {children}
          <MenuToggle />
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
