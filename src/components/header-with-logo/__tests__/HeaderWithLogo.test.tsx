import React from 'react';
import { render } from '@testing-library/react';
import HeaderWithLogo from '../HeaderWithLogo';

describe('The header component', () => {
  it('Matches the snapshot', () => {
    const { container } = render(
      <HeaderWithLogo>
        <HeaderWithLogo.Container>
          <HeaderWithLogo.Logo href="/" />
          <HeaderWithLogo.Content>
            <HeaderWithLogo.Search />
          </HeaderWithLogo.Content>
        <HeaderWithLogo.Nav>
          <HeaderWithLogo.NavItem href="/conditions">Health A-Z</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/live-well">Live Well</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/social-care-and-support">Care and support</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/news">Health news</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/service-search">Services near you</HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavItem href="/" home>
            Home
          </HeaderWithLogo.NavItem>
          <HeaderWithLogo.NavDropdownMenu />
        </HeaderWithLogo.Nav>
        </HeaderWithLogo.Container>
      </HeaderWithLogo>,
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
        <HeaderWithLogo transactional={transactional} orgName={orgName} white={white}></HeaderWithLogo>,
      );

      const headerElement = container.querySelector('.nhsuk-header');

      if (transactional) {
        expect(headerElement?.className).toContain('nhsuk-header__transactional');
      } else {
        expect(headerElement?.className).not.toContain('nhsuk-header__transactional');
      }

      if (orgName !== undefined) {
        expect(headerElement?.className).toContain('nhsuk-header--organisation');
      } else {
        expect(headerElement?.className).not.toContain('nhsuk-header--organisation');
      }

      if (white) {
        expect(headerElement?.className).toContain('nhsuk-header--white');
      } else {
        expect(headerElement?.className).not.toContain('nhsuk-header--white');
      }
    },
  );

  describe('The Nav component', () => {
    it.each`
      numberOfLinks | expectedLeftAligned
      ${0}          | ${true}
      ${1}          | ${true}
      ${2}          | ${true}
      ${3}          | ${true}
      ${4}          | ${false}
      ${5}          | ${false}
    `(
      'When rendered with $numberOfLinks links then it is $expectedLeftAligned that the list has the left aligned class',
      ({ numberOfLinks, expectedLeftAligned }) => {
        const { container } = render(
          <HeaderWithLogo.Nav>
            {[...Array(numberOfLinks)].map((_x, i) => (
              <HeaderWithLogo.NavItem key={i} />
            ))}
          </HeaderWithLogo.Nav>,
        );

        const navList = container.getElementsByClassName('nhsuk-header__navigation-list')[0];

        if (expectedLeftAligned) {
          expect(navList?.className).toContain('nhsuk-header__navigation-list--left-aligned');
        } else {
          expect(navList?.className).not.toContain('nhsuk-header__navigation-list--left-aligned');
        }
      },
    );

    it('Only counts NavItem components when determining whether to set left aligned class', () => {
      const { container } = render(
        <HeaderWithLogo.Nav>
          <HeaderWithLogo.NavItem />
          <HeaderWithLogo.NavItem />
          <HeaderWithLogo.NavItem />
          <HeaderWithLogo.Logo />
        </HeaderWithLogo.Nav>,
      );

      const navList = container.getElementsByClassName('nhsuk-header__navigation-list')[0];

      expect(navList?.className).toContain('nhsuk-header__navigation-list--left-aligned');
    });
  });

  describe('The NavDropdownMenu', () => {
    it.each<string | undefined>([undefined, 'Dropdown Text'])(
      'Renders as expected when passed a dropdownText of %s',
      (dropdownText) => {
        const { container } = render(
          <HeaderWithLogo>
            <HeaderWithLogo.NavDropdownMenu dropdownText={dropdownText}></HeaderWithLogo.NavDropdownMenu>
          </HeaderWithLogo>,
        );

        const visuallyHiddenText = container.querySelector(
          '.nhsuk-header__menu-toggle > .nhsuk-u-visually-hidden',
        );

        expect(visuallyHiddenText?.nextSibling?.textContent).toBe(dropdownText ?? 'More');
      },
    );
  });

  describe('The NavItem component', () => {
    it.each<boolean | undefined>([undefined, false, true])(
      'Sets the home className as expected when home is %s',
      (home) => {
        const { container } = render(
          <HeaderWithLogo>
            <HeaderWithLogo.Nav>
              <HeaderWithLogo.NavItem home={home} />
            </HeaderWithLogo.Nav>
          </HeaderWithLogo>,
        );

        const navItemElement = container.querySelector('.nhsuk-header__navigation-item');

        if (home) {
          expect(navItemElement?.className).toContain('nhsuk-header__navigation-item--home');
        } else {
          expect(navItemElement?.className).not.toContain('nhsuk-header__navigation-item--home');
        }
      },
    );
  });

  describe('The Logo component', () => {
    it('Sets logo only class if there is no menu or search', () => {
      const { container } = render(
        <HeaderWithLogo>
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-header__logo')?.className).toContain(
        'nhsuk-header__logo--only',
      );
    });

    it('Does not set logo only class if there is a menu', () => {
      const { container } = render(
        <HeaderWithLogo>
          <HeaderWithLogo.Nav>
            <HeaderWithLogo.NavDropdownMenu />
          </HeaderWithLogo.Nav>
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-header__logo')?.className).not.toContain(
        'nhsuk-header__logo--only',
      );
    });

    it('Does not set logo only class if there is a search', () => {
      const { container } = render(
        <HeaderWithLogo>
          <HeaderWithLogo.Search />
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-header__logo')?.className).not.toContain(
        'nhsuk-header__logo--only',
      );
    });

    it('Does not set logo only class if there is a service name', () => {
      const { container } = render(
        <HeaderWithLogo>
          <HeaderWithLogo.ServiceName>Test</HeaderWithLogo.ServiceName>
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-header__logo')?.className).not.toContain(
        'nhsuk-header__logo--only',
      );
    });

    it('Sets the transactional class if the header is transactional', () => {
      const { container } = render(
        <HeaderWithLogo transactional>
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-header__logo')?.className).toContain(
        'nhsuk-header__transactional--logo',
      );
    });

    it.each<string | undefined>([undefined, 'Test service'])(
      'Renders as expected with the service name %s',
      (serviceName) => {
        const { container } = render(
          <HeaderWithLogo serviceName={serviceName}>
            <HeaderWithLogo.Logo />
          </HeaderWithLogo>,
        );

        if (serviceName) {
          expect(container.querySelector('.nhsuk-header__link')?.className).toContain(
            'nhsuk-header__link--service',
          );

          expect(container.querySelector('.nhsuk-header__service-name')?.textContent).toBe(
            'Test service',
          );
        } else {
          expect(container.querySelector('.nhsuk-header__link')?.className).not.toContain(
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
        <HeaderWithLogo orgName="Test org">
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-organisation-name')?.textContent).toBe('Test org');
      expect(container.querySelector('.nhsuk-organisation-name-split')).toBeNull();
      expect(container.querySelector('.nhsuk-organisation-descriptor')).toBeNull();
    });

    it('Renders the orgName, orgSplit and orgDescriptor', () => {
      const { container } = render(
        <HeaderWithLogo orgName="Test org" orgSplit="Org split" orgDescriptor="Org descriptor">
          <HeaderWithLogo.Logo />
        </HeaderWithLogo>,
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
        <HeaderWithLogo orgName="Test org">
          <HeaderWithLogo.Logo logoUrl="Test url" />
        </HeaderWithLogo>,
      );

      expect(container.querySelector('.nhsuk-org-logo')?.getAttribute('src')).toBe('Test url');
    });
  });
});
