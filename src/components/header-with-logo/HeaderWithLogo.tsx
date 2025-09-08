import React, { useContext, useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import NHSLogo, { NHSLogoNavProps } from './components/LocalNHSLogo';
import OrganisationalLogo, { OrganisationalLogoProps } from './components/LocalOrganisationalLogo';
import HeaderContext, { IHeaderContext } from './HeaderContext';
import Search from './components/LocalSearch';
import Nav from './components/LocalNav';
import NavItem from './components/LocalNavItem';
import NavDropdownMenu from './components/LocalNavDropdownMenu';
import Content from './components/LocalContent';
import TransactionalServiceName from './components/LocalTransactionalServiceName';
import HeaderJs from './header';
import Container from '@components/layout/Container';
import './_headerWithLogo.scss'

const BaseHeaderLogo: React.FC<OrganisationalLogoProps & NHSLogoNavProps> = (props) => {
  const { orgName } = useContext<IHeaderContext>(HeaderContext);
  if (orgName) {
    return <OrganisationalLogo {...props} />;
  }
  return <NHSLogo {...props} />;
};

const HeaderContainer: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <Container className={classNames('nhsuk-header__container', className)} {...rest} />
);

interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
  transactional?: boolean;
  orgName?: string;
  orgSplit?: string;
  orgDescriptor?: string;
  serviceName?: string;
  white?: boolean;
}

const HeaderWithLogo = ({
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

HeaderWithLogo.Logo = BaseHeaderLogo;
HeaderWithLogo.Search = Search;
HeaderWithLogo.Nav = Nav;
HeaderWithLogo.NavItem = NavItem;
HeaderWithLogo.NavDropdownMenu = NavDropdownMenu;
HeaderWithLogo.Container = HeaderContainer;
HeaderWithLogo.Content = Content;
HeaderWithLogo.ServiceName = TransactionalServiceName;

export default HeaderWithLogo;
