'use client';
import React, { FC, HTMLProps, useContext, useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import NHSLogo, { NHSLogoNavProps } from './components/NHSLogo';
import OrganisationalLogo, { OrganisationalLogoProps } from './components/OrganisationalLogo';
import HeaderContext, { IHeaderContext } from './HeaderContext';
import Search from './components/Search';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import NavDropdownMenu from './components/NavDropdownMenu';
import { Container } from '@components/layout';
import Content from './components/Content';
import TransactionalServiceName from './components/TransactionalServiceName';
import { createAll, Header } from 'nhsuk-frontend';

const HeaderLogo: FC<OrganisationalLogoProps & NHSLogoNavProps> = (props) => {
  const { orgName } = useContext<IHeaderContext>(HeaderContext);
  if (orgName) {
    return <OrganisationalLogo {...props} />;
  }
  return <NHSLogo {...props} />;
};

const HeaderContainer: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <Container className={classNames('nhsuk-header__container', className)} {...rest} />
);

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  transactional?: boolean;
  orgName?: string;
  orgSplit?: string;
  orgDescriptor?: string;
  serviceName?: string;
  white?: boolean;
}

const HeaderComponent = ({
  className,
  children,
  transactional,
  orgName,
  orgSplit,
  orgDescriptor,
  role = 'banner',
  serviceName,
  white,
  ...rest
}: HeaderProps) => {
  const [hasMenuToggle, setHasMenuToggle] = useState(false);
  const [hasSearch, setHasSearch] = useState(false);
  const [hasServiceName, setHasServiceName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    createAll(Header);
  }, []);

  const setMenuToggle = (toggle: boolean): void => {
    setHasMenuToggle(toggle);
  };

  const setSearch = (toggle: boolean): void => {
    setHasSearch(toggle);
  };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const setServiceName = (toggle: boolean): void => {
    setHasServiceName(toggle);
  };

  const contextValue: IHeaderContext = useMemo(() => {
    return {
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      hasSearch,
      hasMenuToggle,
      hasServiceName,
      setMenuToggle,
      setSearch,
      setServiceName,
      toggleMenu,
      menuOpen,
      transactional: transactional ?? false,
    };
  }, [
    orgName,
    orgSplit,
    orgDescriptor,
    serviceName,
    hasSearch,
    hasMenuToggle,
    hasServiceName,
    setMenuToggle,
    setSearch,
    setServiceName,
    toggleMenu,
    menuOpen,
    transactional,
  ]);

  return (
    <header
      className={classNames(
        'nhsuk-header',
        { 'nhsuk-header__transactional': transactional },
        { 'nhsuk-header--organisation': orgName },
        { 'nhsuk-header--white': white },
        className,
      )}
      role={role}
      {...rest}
    >
      <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
    </header>
  );
};

HeaderComponent.Logo = HeaderLogo;
HeaderComponent.Search = Search;
HeaderComponent.Nav = Nav;
HeaderComponent.NavItem = NavItem;
HeaderComponent.NavDropdownMenu = NavDropdownMenu;
HeaderComponent.Container = HeaderContainer;
HeaderComponent.Content = Content;
HeaderComponent.ServiceName = TransactionalServiceName;

export default HeaderComponent;
