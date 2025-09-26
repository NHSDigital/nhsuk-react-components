'use client';
import React, {
  ComponentPropsWithoutRef,
  useState,
  useEffect,
  useMemo,
  useRef,
  Children,
} from 'react';
import classNames from 'classnames';
import { Container } from '@components/layout';
import { childIsOfComponentType } from '@util/types/TypeGuards';
import HeaderContext, { IHeaderContext } from './HeaderContext';
import Account from './components/Account';
import AccountItem from './components/AccountItem';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import NavigationItem from './components/NavigationItem';
import Search from './components/Search';
import ServiceName from './components/ServiceName';
import { Header } from 'nhsuk-frontend';

interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
  containerClasses?: string;
  logo?: IHeaderContext['logoProps'];
  service?: IHeaderContext['serviceProps'];
  organisation?: IHeaderContext['organisationProps'];
  white?: boolean;
}

const HeaderComponent = ({
  className,
  containerClasses,
  children,
  logo,
  service,
  organisation,
  white,
  ...rest
}: HeaderProps) => {
  const moduleRef = useRef<HTMLDivElement>(null);

  const [logoProps, setLogoProps] = useState(logo);
  const [serviceProps, setServiceProps] = useState(service);
  const [organisationProps, setOrganisationProps] = useState(organisation);
  const [instance, setInstance] = useState<Header>();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!logo) {
      return;
    }

    setLogoProps(logo);
    return () => setLogoProps(undefined);
  }, [logo]);

  useEffect(() => {
    if (!service) {
      return;
    }

    setServiceProps(service);
    return () => setServiceProps(undefined);
  }, [service]);

  useEffect(() => {
    if (!organisation) {
      return;
    }

    setOrganisationProps(organisation);
    return () => setOrganisationProps(undefined);
  }, [organisation]);

  useEffect(() => {
    if (!moduleRef.current || instance) {
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

    setInstance(new Header(moduleRef.current));
  }, [moduleRef, instance, menuOpen]);

  const contextValue: IHeaderContext = useMemo(() => {
    return {
      logoProps,
      serviceProps,
      organisationProps,
      menuOpen,
      setMenuOpen,
      setLogoProps,
      setServiceProps,
      setOrganisationProps,
    };
  }, [logoProps, serviceProps, organisationProps]);

  const items = Children.toArray(children);
  const [childLogo] = items.filter((child) => childIsOfComponentType(child, Logo));
  const [childSearch] = items.filter((child) => childIsOfComponentType(child, Search));
  const [childNavigation] = items.filter((child) => childIsOfComponentType(child, Navigation));
  const [childAccount] = items.filter((child) => childIsOfComponentType(child, Account));

  return (
    <header
      className={classNames(
        'nhsuk-header',
        { 'nhsuk-header--organisation': !!organisationProps },
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
          <ServiceName {...serviceProps}>{childLogo}</ServiceName>
          {childSearch}
          {childAccount}
        </Container>
        {childNavigation}
      </HeaderContext.Provider>
    </header>
  );
};

HeaderComponent.Account = Account;
HeaderComponent.AccountItem = AccountItem;
HeaderComponent.Logo = Logo;
HeaderComponent.Search = Search;
HeaderComponent.Navigation = Navigation;
HeaderComponent.NavigationItem = NavigationItem;

export default HeaderComponent;
