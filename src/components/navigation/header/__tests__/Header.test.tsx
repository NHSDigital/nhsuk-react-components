import React from 'react';
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
});
