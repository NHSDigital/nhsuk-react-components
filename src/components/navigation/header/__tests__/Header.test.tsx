import React, { ComponentProps, createRef } from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('matches snapshot', () => {
    const { container } = render(
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
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(
      <Header ref={ref}>
        <Header.Logo href="/" />
      </Header>,
    );

    const headerEl = container.querySelector('header');

    expect(ref.current).toBe(headerEl);
    expect(ref.current).toHaveClass('nhsuk-header');
  });

  it('sets organisation className', () => {
    const { container } = render(<Header organisation={{ name: 'Organisation' }}></Header>);

    const headerEl = container.querySelector('.nhsuk-header');

    expect(headerEl).toHaveClass('nhsuk-header--organisation');
  });

  it('sets white className', () => {
    const { container } = render(<Header white></Header>);

    const headerEl = container.querySelector('.nhsuk-header');

    expect(headerEl).toHaveClass('nhsuk-header--white');
  });

  it('sets white navigation className', () => {
    const { container } = render(
      <Header>
        <Header.Navigation white>
          <Header.NavigationItem href="/">Home</Header.NavigationItem>
        </Header.Navigation>
      </Header>,
    );

    const headerNavigationEl = container.querySelector('.nhsuk-header__navigation');

    expect(headerNavigationEl).toHaveClass('nhsuk-header__navigation--white');
  });

  describe('Header.Logo', () => {
    it('renders logo only', () => {
      const { container } = render(
        <Header>
          <Header.Logo />
        </Header>,
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');

      expect(linkEl).not.toBeInTheDocument();
      expect(logoEl).toHaveAccessibleName('NHS');
    });

    it('renders logo only (with link)', () => {
      const { container } = render(
        <Header>
          <Header.Logo href="/" />
        </Header>,
      );

      const linkEl = container.querySelector('.nhsuk-header__service a');
      const logoEl = container.querySelector('.nhsuk-header__logo');

      expect(linkEl).toHaveAttribute('href', '/');
      expect(linkEl).toHaveAccessibleName('NHS homepage');
      expect(logoEl).toHaveAccessibleName('NHS');
    });

    it('renders logo and organisation name', () => {
      const { container } = render(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo />
        </Header>,
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

    it('renders logo (with link) and organisation name', () => {
      const { container } = render(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo href="/" />
        </Header>,
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

    it('renders logo (custom src) and organisation name', () => {
      const { container } = render(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo src="custom.svg" />
        </Header>,
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

    it('renders logo (with link, custom src) and organisation name', () => {
      const { container } = render(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo href="/" src="custom.svg" />
        </Header>,
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

    it('renders logo (with link) and organisation name (split, with descriptor)', () => {
      const { container } = render(
        <Header
          organisation={{
            name: 'Anytown Anyplace',
            split: 'Anywhere',
            descriptor: 'NHS Foundation Trust',
          }}
        >
          <Header.Logo href="/" />
        </Header>,
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
    it('matches snapshot', () => {
      const { container } = render(
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
      );

      expect(container).toMatchSnapshot();
    });

    it('forwards refs', () => {
      const ref1 = createRef<HTMLButtonElement>();
      const ref2 = createRef<HTMLAnchorElement>();

      const { container } = render(
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
      );

      const accountItemEl1 = container.querySelector('a');
      const accountItemEl2 = container.querySelector('button');

      expect(ref1.current).toBe(accountItemEl1);
      expect(ref1.current).toHaveClass('nhsuk-header__account-link');

      expect(ref2.current).toBe(accountItemEl2);
      expect(ref2.current).toHaveClass('nhsuk-header__account-button');
    });

    it('renders as custom element', () => {
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

      const { container } = render(
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
