'use client';

import classNames from 'classnames';
import { useContext, useEffect, type ComponentPropsWithoutRef, type FC } from 'react';

import { HeaderContext, type IHeaderContext } from '../HeaderContext.js';

import { HeaderMenuToggle } from './HeaderMenuToggle.js';

import { Container } from '#components/layout/index.js';

export interface HeaderNavigationProps extends ComponentPropsWithoutRef<'nav'> {
  white?: boolean;
  open?: boolean;
}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({
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
  }, [open, setMenuOpen]);

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
          <HeaderMenuToggle />
        </ul>
      </Container>
    </nav>
  );
};

HeaderNavigation.displayName = 'Header.Navigation';
