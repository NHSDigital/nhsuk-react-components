import React, { ComponentProps, createRef } from 'react';
import Header from '../Header';
import { renderClient, renderServer } from '@util/components';

describe('Header', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Header>
        <Header.Logo href="/" />
        <Header.Search />
        <Header.Navigation>
          <Header.NavigationItem href="/conditions">Health A-Z</Header.NavigationItem>
          <Header.NavigationItem href="/live-well">Live Well</Header.NavigationItem>
          <Header.NavigationItem href="/social-care-and-support">
            Care and support
          </Header.NavigationItem>
          <Header.NavigationItem href="/news">Health news</Header.NavigationItem>
          <Header.NavigationItem href="/service-search">Services near you</Header.NavigationItem>
          <Header.NavigationItem href="/">Home</Header.NavigationItem>
        </Header.Navigation>
      </Header>,
      { moduleName: 'nhsuk-header' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Header>
        <Header.Logo href="/" />
        <Header.Search />
        <Header.Navigation>
          <Header.NavigationItem href="/conditions">Health A-Z</Header.NavigationItem>
          <Header.NavigationItem href="/live-well">Live Well</Header.NavigationItem>
          <Header.NavigationItem href="/social-care-and-support">
            Care and support
          </Header.NavigationItem>
          <Header.NavigationItem href="/news">Health news</Header.NavigationItem>
          <Header.NavigationItem href="/service-search">Services near you</Header.NavigationItem>
          <Header.NavigationItem href="/">Home</Header.NavigationItem>
        </Header.Navigation>
      </Header>,
      { moduleName: 'nhsuk-header' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-header',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLElement>();

    const { modules } = await renderClient(
      <Header ref={ref}>
        <Header.Logo href="/" />
      </Header>,
      { moduleName: 'nhsuk-header' },
    );

    const [headerEl] = modules;

    expect(ref.current).toBe(headerEl);
    expect(ref.current).toHaveClass('nhsuk-header');
  });

  it('sets organisation className', async () => {
    const { modules } = await renderClient(
      <Header organisation={{ name: 'Organisation' }}></Header>,
      { moduleName: 'nhsuk-header' },
    );

    const [headerEl] = modules;
    expect(headerEl).toHaveClass('nhsuk-header--organisation');
  });

  it('sets white className', async () => {
    const { modules } = await renderClient(<Header white></Header>, {
      moduleName: 'nhsuk-header',
    });

    const [headerEl] = modules;
    expect(headerEl).toHaveClass('nhsuk-header--white');
  });

  it('sets white navigation className', async () => {
    const { container } = await renderClient(
      <Header>
        <Header.Navigation white>
          <Header.NavigationItem href="/">Home</Header.NavigationItem>
        </Header.Navigation>
      </Header>,
      { moduleName: 'nhsuk-header' },
    );

    const headerNavigationEl = container.querySelector('.nhsuk-header__navigation');
    expect(headerNavigationEl).toHaveClass('nhsuk-header__navigation--white');
  });

  describe('Header.Logo', () => {
    it('renders logo only', async () => {
      const { container } = await renderClient(
        <Header>
          <Header.Logo />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');

      expect(linkEl).not.toBeInTheDocument();
      expect(logoEl).toHaveAccessibleName('NHS');
    });

    it('renders logo only (with link)', async () => {
      const { container } = await renderClient(
        <Header>
          <Header.Logo href="/" />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');

      expect(linkEl).toHaveAttribute('href', '/');
      expect(linkEl).toHaveAccessibleName('NHS homepage');
      expect(logoEl).toHaveAccessibleName('NHS');
    });

    it('renders logo and organisation name', async () => {
      const { container } = await renderClient(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');
      const organisationLogoEl = container.querySelector('.nhsuk-header__organisation-logo');
      const organisationNameEl = container.querySelector('.nhsuk-header__organisation-name');

      expect(linkEl).not.toBeInTheDocument();
      expect(logoEl).toHaveAccessibleName('NHS');
      expect(organisationLogoEl).not.toBeInTheDocument();
      expect(organisationNameEl).toHaveTextContent('Test organisation');
    });

    it('renders logo (with link) and organisation name', async () => {
      const { container } = await renderClient(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo href="/" />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');
      const organisationLogoEl = container.querySelector('.nhsuk-header__organisation-logo');
      const organisationNameEl = container.querySelector('.nhsuk-header__organisation-name');

      expect(linkEl).toHaveAttribute('href', '/');
      expect(linkEl).toHaveAccessibleName('NHS Test organisation homepage');
      expect(logoEl).toHaveAccessibleName('NHS');
      expect(organisationLogoEl).not.toBeInTheDocument();
      expect(organisationNameEl).toHaveTextContent('Test organisation');
    });

    it('renders logo (custom src) and organisation name', async () => {
      const { container } = await renderClient(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo src="custom.svg" />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');
      const organisationLogoEl = container.querySelector('.nhsuk-header__organisation-logo');
      const organisationNameEl = container.querySelector('.nhsuk-header__organisation-name');

      expect(linkEl).not.toBeInTheDocument();
      expect(logoEl).not.toBeInTheDocument();
      expect(organisationLogoEl).toHaveAccessibleName('NHS');
      expect(organisationNameEl).toHaveTextContent('Test organisation');
    });

    it('renders logo (with link, custom src) and organisation name', async () => {
      const { container } = await renderClient(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo href="/" src="custom.svg" />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');
      const organisationLogoEl = container.querySelector('.nhsuk-header__organisation-logo');
      const organisationNameEl = container.querySelector('.nhsuk-header__organisation-name');

      expect(linkEl).toHaveAttribute('href', '/');
      expect(linkEl).toHaveAccessibleName('NHS Test organisation homepage');
      expect(logoEl).not.toBeInTheDocument();
      expect(organisationLogoEl).toHaveAccessibleName('NHS');
      expect(organisationNameEl).toHaveTextContent('Test organisation');
    });

    it('renders logo (with link) and organisation name (split, with descriptor)', async () => {
      const { container } = await renderClient(
        <Header
          organisation={{
            name: 'Anytown Anyplace',
            split: 'Anywhere',
            descriptor: 'NHS Foundation Trust',
          }}
        >
          <Header.Logo href="/" />
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');
      const organisationLogoEl = container.querySelector('.nhsuk-header__organisation-logo');
      const organisationNameEl = container.querySelector('.nhsuk-header__organisation-name');

      expect(linkEl).toHaveAttribute('href', '/');
      expect(linkEl).toHaveAccessibleName('NHS Anytown Anyplace Anywhere homepage');
      expect(logoEl).toHaveAccessibleName('NHS');
      expect(organisationLogoEl).not.toBeInTheDocument();
      expect(organisationNameEl).toHaveTextContent('Anytown AnyplaceAnywhere');
    });
  });

  describe('Header.Account', () => {
    it('matches snapshot', async () => {
      const { container } = await renderClient(
        <Header>
          <Header.Logo />
          <Header.Account>
            <Header.AccountItem href="#" icon={true}>
              florence.nightingale@nhs.net
            </Header.AccountItem>
            <Header.AccountItem formProps={{ action: '/log-out', method: 'post' }}>
              Log out
            </Header.AccountItem>
          </Header.Account>
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      expect(container).toMatchSnapshot();
    });

    it('forwards refs', async () => {
      const ref1 = createRef<HTMLButtonElement>();
      const ref2 = createRef<HTMLAnchorElement>();

      const { container } = await renderClient(
        <Header>
          <Header.Logo />
          <Header.Account>
            <Header.AccountItem href="#" icon={true} ref={ref1}>
              florence.nightingale@nhs.net
            </Header.AccountItem>
            <Header.AccountItem formProps={{ action: '/log-out', method: 'post' }} ref={ref2}>
              Log out
            </Header.AccountItem>
          </Header.Account>
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const accountItemEl1 = container.querySelector('a');
      const accountItemEl2 = container.querySelector('button');

      expect(ref1.current).toBe(accountItemEl1);
      expect(ref1.current).toHaveClass('nhsuk-header__account-link');

      expect(ref2.current).toBe(accountItemEl2);
      expect(ref2.current).toHaveClass('nhsuk-header__account-button');
    });

    it('renders as custom element', async () => {
      function CustomLink({ children, href, ...rest }: ComponentProps<'a'>) {
        return (
          <a href={href} {...rest} data-custom-link="true">
            {children}
          </a>
        );
      }

      function CustomButton(props: ComponentProps<'button'>) {
        return <button {...props} data-custom-button="true" />;
      }

      const { container } = await renderClient(
        <Header>
          <Header.Logo />
          <Header.Account>
            <Header.AccountItem asElement={CustomLink} href="#" icon={true}>
              florence.nightingale@nhs.net
            </Header.AccountItem>
            <Header.AccountItem
              asElement={CustomButton}
              formProps={{ action: '/log-out', method: 'post' }}
            >
              Log out
            </Header.AccountItem>
          </Header.Account>
        </Header>,
        { moduleName: 'nhsuk-header' },
      );

      const accountItemEl1 = container.querySelector('a');
      const accountItemEl2 = container.querySelector('button');

      expect(accountItemEl1).toHaveTextContent('florence.nightingale@nhs.net');
      expect(accountItemEl1?.dataset).toHaveProperty('customLink', 'true');

      expect(accountItemEl2).toHaveTextContent('Log out');
      expect(accountItemEl2?.dataset).toHaveProperty('customButton', 'true');
    });
  });
});
