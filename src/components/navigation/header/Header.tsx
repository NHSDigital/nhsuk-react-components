'use client';
import React, { PureComponent, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import NHSLogo, { NHSLogoNavProps } from './components/NHSLogo';
import OrganisationalLogo, { OrganisationalLogoProps } from './components/OrganisationalLogo';
import HeaderContext, { IHeaderContext } from './HeaderContext';
import Search from './components/Search';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import NavDropdownMenu from './components/NavDropdownMenu';
import { Container } from '../../layout';
import Content from './components/Content';
import TransactionalServiceName from './components/TransactionalServiceName';
import HeaderJs from 'nhsuk-frontend/packages/components/header/header.js';

const BaseHeaderLogo: React.FC<OrganisationalLogoProps & NHSLogoNavProps> = (props) => {
  const { orgName } = useContext<IHeaderContext>(HeaderContext);
  if (orgName) {
    return <OrganisationalLogo {...props} />;
  }
  return <NHSLogo {...props} />;
};

const HeaderContainer: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
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

interface HeaderState {
  hasMenuToggle: boolean;
  hasSearch: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
}

class Header extends PureComponent<HeaderProps, HeaderState> {
  static Logo = BaseHeaderLogo;

  static Search = Search;

  static Nav = Nav;

  static NavItem = NavItem;

  static NavDropdownMenu = NavDropdownMenu;

  static Container = HeaderContainer;

  static Content = Content;

  static ServiceName = TransactionalServiceName;

  static defaultProps = {
    role: 'banner',
  };

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      hasMenuToggle: false,
      hasSearch: false,
      menuOpen: false,
      searchOpen: false,
    };
  }

  setMenuToggle = (toggle: boolean): void => {
    this.setState({ hasMenuToggle: toggle });
  };

  setSearch = (toggle: boolean): void => {
    this.setState({ hasSearch: toggle });
  };

  toggleMenu = (): void => {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  };

  toggleSearch = (): void => {
    this.setState((state) => ({ searchOpen: !state.searchOpen }));
  };

  componentDidMount(): void {
    HeaderJs();
  }

  render(): JSX.Element {
    const {
      className,
      children,
      transactional,
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      white,
      ...rest
    } = this.props;
    const { hasSearch, hasMenuToggle, menuOpen, searchOpen } = this.state;
    const contextValue: IHeaderContext = {
      orgName,
      orgSplit,
      orgDescriptor,
      serviceName,
      hasSearch,
      hasMenuToggle,
      setMenuToggle: this.setMenuToggle,
      setSearch: this.setSearch,
      toggleMenu: this.toggleMenu,
      toggleSearch: this.toggleSearch,
      menuOpen,
      searchOpen,
    };

    return (
      <header
        className={classNames(
          'nhsuk-header',
          { 'nhsuk-header--transactional': transactional },
          { 'nhsuk-header--organisation': orgName },
          { 'nhsuk-header--white': white },
          className,
        )}
        {...rest}
      >
        <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
      </header>
    );
  }
}

export default Header;
