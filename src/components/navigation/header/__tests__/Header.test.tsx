import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('The header component', () => {
  it('Matches the snapshot', () => {
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

  it('Sets the organisation className', () => {
    const { container } = render(<Header organisation={{ name: 'Organisation' }}></Header>);

    const headerElement = container.querySelector('.nhsuk-header');

    expect(headerElement).toHaveClass('nhsuk-header--organisation');
  });

  describe('The Logo component', () => {
    it('Renders as expected', () => {
      const { container } = render(
        <Header>
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).toBeTruthy();
      expect(container.querySelector('.nhsuk-header__organisation-name')).toBeNull();
    });

    it('Renders as expected with an organisation', () => {
      const { container } = render(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).toBeTruthy();
      expect(container.querySelector('.nhsuk-header__organisation-name')).toHaveTextContent(
        'Test organisation',
      );
    });

    it('Renders as expected with an organisation and custom logo src', () => {
      const { container } = render(
        <Header organisation={{ name: 'Test organisation' }}>
          <Header.Logo src="custom.svg" />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).toBeNull();
      expect(container.querySelector('.nhsuk-header__organisation-logo')).toBeTruthy();
      expect(container.querySelector('.nhsuk-header__organisation-name')).toHaveTextContent(
        'Test organisation',
      );
    });
  });
});
