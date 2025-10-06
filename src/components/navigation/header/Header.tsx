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
  Account,
  AccountItem,
  Logo,
  Navigation,
  NavigationItem,
  Search,
  ServiceName,
} from './components';
import { HeaderContext, type IHeaderContext } from './HeaderContext';
import { Container } from '#components/layout';
import { childIsOfComponentType } from '#util/types';

export interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
  containerClasses?: string;
  logo?: IHeaderContext['logoProps'];
  service?: IHeaderContext['serviceProps'];
  organisation?: IHeaderContext['organisationProps'];
  white?: boolean;
}

const HeaderComponent = forwardRef<HTMLElement, HeaderProps>((props, forwardedRef) => {
  const { className, containerClasses, children, logo, service, organisation, white, ...rest } =
    props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLElement>());

  const [logoProps, setLogoProps] = useState(logo);
  const [serviceProps, setServiceProps] = useState(service);
  const [organisationProps, setOrganisationProps] = useState(organisation);
  const [instance, setInstance] = useState<HeaderModule>();
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

    const { current: $root } = moduleRef;

    import('nhsuk-frontend').then(({ Header }) => {
      setInstance(new Header($root));
    });
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
  const childLogo = items.find((child) => childIsOfComponentType(child, Logo));
  const childSearch = items.find((child) => childIsOfComponentType(child, Search));
  const childNavigation = items.find((child) => childIsOfComponentType(child, Navigation));
  const childAccount = items.find((child) => childIsOfComponentType(child, Account));

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
});

HeaderComponent.displayName = 'Header';

export const Header = Object.assign(HeaderComponent, {
  Account,
  AccountItem,
  Logo,
  Search,
  Navigation,
  NavigationItem,
});
