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
import HeaderJs from 'nhsuk-frontend/packages/components/header/header.js';

const BaseHeaderLogo: FC<OrganisationalLogoProps & NHSLogoNavProps> = (props) => {
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

const Header = ({
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    HeaderJs();
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

  const contextValue: IHeaderContext = useMemo(() => {
    return {
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      hasSearch,
      hasMenuToggle,
      setMenuToggle,
      setSearch,
      toggleMenu,
      menuOpen,
    };
  }, [
    orgName,
    orgSplit,
    orgDescriptor,
    serviceName,
    hasSearch,
    hasMenuToggle,
    setMenuToggle,
    setSearch,
    toggleMenu,
    menuOpen,
  ]);

  return (
    <header
      className={classNames(
        'nhsuk-header',
        { 'nhsuk-header--transactional': transactional },
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

Header.Logo = BaseHeaderLogo;
Header.Search = Search;
Header.Nav = Nav;
Header.NavItem = NavItem;
Header.NavDropdownMenu = NavDropdownMenu;
Header.Container = HeaderContainer;
Header.Content = Content;
Header.ServiceName = TransactionalServiceName;

export default Header;
