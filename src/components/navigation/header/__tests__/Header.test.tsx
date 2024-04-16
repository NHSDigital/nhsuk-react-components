import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header from '../Header';

describe('The header component', () => {
  it('Matches the snapshot', () => {
    const { container } = render(
      <Header>
        <Header.Container>
          <Header.Logo href="/" />
          <Header.Content>
            <Header.Search />
          </Header.Content>
        </Header.Container>
        <Header.Nav>
          <Header.NavItem href="/" mobileOnly>
            Home
          </Header.NavItem>
          <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
          <Header.NavItem href="/live-well">Live Well</Header.NavItem>
          <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
          <Header.NavItem href="/news">Health news</Header.NavItem>
          <Header.NavItem href="/service-search">Services near you</Header.NavItem>
          <Header.NavDropdownMenu />
        </Header.Nav>
      </Header>,
    );

    expect(container).toMatchSnapshot();
  });

  it.each`
    transactional | orgName      | white
    ${true}       | ${'org'}     | ${true}
    ${false}      | ${undefined} | ${false}
    ${undefined}  | ${'org'}     | ${true}
    ${true}       | ${'org'}     | ${undefined}
  `(
    'Sets the appropriate classNames with transactional $transactional and orgName $orgName and white $white',
    ({ transactional, orgName, white }) => {
      const { container } = render(
        <Header transactional={transactional} orgName={orgName} white={white}></Header>,
      );

      const headerElement = container.querySelector('.nhsuk-header');

      if (transactional) {
        expect(headerElement).toHaveClass('nhsuk-header__transactional');
      } else {
        expect(headerElement).not.toHaveClass('nhsuk-header__transactional');
      }

      if (orgName !== undefined) {
        expect(headerElement).toHaveClass('nhsuk-header--organisation');
      } else {
        expect(headerElement).not.toHaveClass('nhsuk-header--organisation');
      }

      if (white) {
        expect(headerElement).toHaveClass('nhsuk-header--white');
      } else {
        expect(headerElement).not.toHaveClass('nhsuk-header--white');
      }
    },
  );

  describe('The NavDropdownMenu', () => {
    it.each<string | undefined>([undefined, 'Dropdown Text'])(
      'Renders as expected when passed a dropdownText of %s',
      (dropdownText) => {
        const { container } = render(
          <Header>
            <Header.NavDropdownMenu dropdownText={dropdownText}></Header.NavDropdownMenu>
          </Header>,
        );

        const visuallyHiddenText = container.querySelector(
          '.nhsuk-header__menu-toggle > .nhsuk-u-visually-hidden',
        );

        expect(visuallyHiddenText?.nextSibling?.textContent).toBe(dropdownText ?? 'More');
      },
    );

    it('Invokes the onClick prop when button is clicked', () => {
      const clickFn = jest.fn();
      const { container } = render(
        <Header>
          <Header.NavDropdownMenu onClick={clickFn}></Header.NavDropdownMenu>
        </Header>,
      );

      const buttonElement = container.querySelector('.nhsuk-header__menu-toggle');

      expect(clickFn).not.toHaveBeenCalled();

      fireEvent.click(buttonElement!);

      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('The NavItem component', () => {
    it.each<boolean | undefined>([undefined, false, true])(
      'Sets the mobile className as expected when mobileOnly is %s',
      (mobileOnly) => {
        const { container } = render(
          <Header>
            <Header.Nav>
              <Header.NavItem mobileOnly={mobileOnly} />
            </Header.Nav>
          </Header>,
        );

        const navItemElement = container.querySelector('.nhsuk-header__navigation-item');

        if (mobileOnly) {
          expect(navItemElement).toHaveClass('nhsuk-header__navigation-item--for-mobile');
        } else {
          expect(navItemElement).not.toHaveClass('nhsuk-header__navigation-item--for-mobile');
        }
      },
    );
  });

  describe('The Logo component', () => {
    it('Sets logo only class if there is no menu or search', () => {
      const { container } = render(
        <Header>
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).toHaveClass(
        'nhsuk-header__logo--only',
      );
    });

    it('Does not set logo only class if there is a menu', () => {
      const { container } = render(
        <Header>
          <Header.Nav>
            <Header.NavDropdownMenu />
          </Header.Nav>
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).not.toHaveClass(
        'nhsuk-header__logo--only',
      );
    });

    it('Does not set logo only class if there is a search', () => {
      const { container } = render(
        <Header>
          <Header.Search />
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).not.toHaveClass(
        'nhsuk-header__logo--only',
      );
    });

    it('Sets the transactional class if the header is transactional', () => {
      const { container } = render(
        <Header transactional>
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-header__logo')).toHaveClass(
        'nhsuk-header__transactional--logo',
      );
    });

    it.each<string | undefined>([undefined, 'Test service'])(
      'Renders as expected with the service name %s',
      (serviceName) => {
        const { container } = render(
          <Header serviceName={serviceName}>
            <Header.Logo />
          </Header>,
        );

        if (serviceName) {
          expect(container.querySelector('.nhsuk-header__link')).toHaveClass(
            'nhsuk-header__link--service',
          );

          expect(container.querySelector('.nhsuk-header__service-name')?.textContent).toBe(
            'Test service',
          );
        } else {
          expect(container.querySelector('.nhsuk-header__link')).not.toHaveClass(
            'nhsuk-header__link--service',
          );

          expect(container.querySelector('.nhsuk-header__service-name')).toBeNull();
        }
      },
    );
  });

  describe('The OrganizationalLogo component', () => {
    it('Is rendered when orgName is specified', () => {
      const { container } = render(
        <Header orgName="Test org">
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-organisation-name')?.textContent).toBe('Test org');
      expect(container.querySelector('.nhsuk-organisation-name-split')).toBeNull();
      expect(container.querySelector('.nhsuk-organisation-descriptor')).toBeNull();
    });

    it('Renders the orgName, orgSplit and orgDescriptor', () => {
      const { container } = render(
        <Header orgName="Test org" orgSplit="Org split" orgDescriptor="Org descriptor">
          <Header.Logo />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-organisation-name-split')?.textContent).toBe(
        'Org split',
      );
      expect(container.querySelector('.nhsuk-organisation-descriptor')?.textContent).toBe(
        'Org descriptor',
      );
    });

    it('Uses the logoUrl if specified', () => {
      const { container } = render(
        <Header orgName="Test org">
          <Header.Logo logoUrl="Test url" />
        </Header>,
      );

      expect(container.querySelector('.nhsuk-org-logo')?.getAttribute('src')).toBe('Test url');
    });
  });
});
