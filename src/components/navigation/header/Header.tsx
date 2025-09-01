'use client';
import React, { HTMLProps, useState, useEffect, useMemo, useRef, Children } from 'react';
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

interface HeaderProps
  extends HTMLProps<HTMLDivElement>,
    Pick<IHeaderContext, 'logo' | 'service' | 'organisation'> {
  containerClasses?: string;
}

const HeaderComponent = ({ className, containerClasses, children, ...rest }: HeaderProps) => {
  const moduleRef = useRef<HTMLDivElement>(null);

  const [logo, setLogo] = useState(rest.logo);
  const [service, setService] = useState(rest.service);
  const [organisation, setOrganisation] = useState(rest.organisation);
  const [instance, setInstance] = useState<Header>();

  useEffect(() => {
    if (!rest.logo) {
      return;
    }

    setLogo(rest.logo);
    return () => setLogo(undefined);
  }, [rest.logo]);

  useEffect(() => {
    if (!rest.service) {
      return;
    }

    setService(rest.service);
    return () => setService(undefined);
  }, [rest.service]);

  useEffect(() => {
    if (!rest.organisation) {
      return;
    }

    setOrganisation(rest.organisation);
    return () => setOrganisation(undefined);
  }, [rest.organisation]);

  useEffect(() => {
    if (!moduleRef.current || instance) {
      return;
    }

    setInstance(new Header(moduleRef.current));
  }, [moduleRef, instance]);

  const contextValue: IHeaderContext = useMemo(() => {
    return {
      logo,
      service,
      organisation,
      setLogo,
      setService,
      setOrganisation,
    };
  }, [logo, service, organisation]);

  const items = Children.toArray(children);
  const [childLogo] = items.filter((child) => childIsOfComponentType(child, Logo));
  const [childSearch] = items.filter((child) => childIsOfComponentType(child, Search));
  const [childNavigation] = items.filter((child) => childIsOfComponentType(child, Navigation));
  const [childAccount] = items.filter((child) => childIsOfComponentType(child, Account));

  return (
    <header
      className={classNames(
        'nhsuk-header',
        { 'nhsuk-header--organisation': organisation },
        className,
      )}
      data-module="nhsuk-header"
      role="banner"
      ref={moduleRef}
    >
      <HeaderContext.Provider value={contextValue}>
        <Container className={classNames('nhsuk-header__container', containerClasses)}>
          <ServiceName {...service}>{childLogo}</ServiceName>
          {childSearch}
          {childAccount}
        </Container>
        {childNavigation}
      </HeaderContext.Provider>
    </header>
  );
};

HeaderComponent.displayName = 'Header';

HeaderComponent.Account = Account;
HeaderComponent.AccountItem = AccountItem;
HeaderComponent.Logo = Logo;
HeaderComponent.Search = Search;
HeaderComponent.Navigation = Navigation;
HeaderComponent.NavigationItem = NavigationItem;

export default HeaderComponent;
