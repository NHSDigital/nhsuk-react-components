'use client';

import classNames from 'classnames';
import { type Header as HeaderModule } from 'nhsuk-frontend';
import {
  Children,
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import {
  HeaderAccount,
  HeaderAccountItem,
  HeaderLogo,
  HeaderNavigation,
  HeaderNavigationItem,
  HeaderSearch,
  HeaderServiceName,
  type HeaderServiceNameProps,
} from './components/index.js';
import { HeaderContext, type IHeaderContext } from './HeaderContext.js';
import { Container } from '#components/layout/index.js';
import { childIsOfComponentType } from '#util/types/index.js';

export interface HeaderProps extends ComponentPropsWithoutRef<'div'>, HeaderServiceNameProps {
  containerClasses?: string;
  white?: boolean;
}

const HeaderComponent = forwardRef<HTMLElement, HeaderProps>((props, forwardedRef) => {
  const { className, containerClasses, children, logo, service, organisation, white, ...rest } =
    props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLElement>());
  const [instanceError, setInstanceError] = useState<Error>();
  const [instance, setInstance] = useState<HeaderModule>();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      if (!instance) {
        return;
      }

      // Sync menu open state
      if (menuOpen && !instance.menuIsOpen) {
        instance.openMenu();
      }

      // Sync menu close state
      if (!menuOpen && instance.menuIsOpen) {
        instance.closeMenu();
      }

      return;
    }

    import('nhsuk-frontend')
      .then(({ Header }) => setInstance(new Header(moduleRef.current)))
      .catch(setInstanceError);
  }, [moduleRef, instance, menuOpen]);

  const contextValue: IHeaderContext = useMemo(() => {
    return { menuOpen, setMenuOpen };
  }, [menuOpen]);

  const items = Children.toArray(children);
  const childSearch = items.find((child) => childIsOfComponentType(child, HeaderSearch));
  const childNavigation = items.find((child) => childIsOfComponentType(child, HeaderNavigation));
  const childAccount = items.find((child) => childIsOfComponentType(child, HeaderAccount));

  if (instanceError) {
    throw instanceError;
  }

  return (
    <header
      className={classNames(
        'nhsuk-header',
        { 'nhsuk-header--organisation': !!organisation },
        { 'nhsuk-header--white': !!white },
        className,
      )}
      data-module="nhsuk-header"
      role="banner"
      ref={moduleRef}
      {...rest}
    >
      <HeaderContext.Provider value={contextValue}>
        <Container className={classNames('nhsuk-header__container', containerClasses)}>
          <HeaderServiceName logo={logo} organisation={organisation} service={service}>
            <HeaderLogo logo={logo} organisation={organisation} />
          </HeaderServiceName>
          {childSearch}
          {childAccount}
        </Container>
        {childNavigation}
      </HeaderContext.Provider>
    </header>
  );
});

HeaderComponent.displayName = 'Header';

export const Header = Object.assign(HeaderComponent, {
  Account: HeaderAccount,
  AccountItem: HeaderAccountItem,
  Search: HeaderSearch,
  Navigation: HeaderNavigation,
  NavigationItem: HeaderNavigationItem,
});
