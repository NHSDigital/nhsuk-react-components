import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '..';

jest.spyOn(console, 'warn').mockImplementation();

describe('Footer', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot('Footer');
  });

  describe('Footer.List', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('matches snapshot', () => {
      const { container } = render(<Footer.List />);

      expect(container).toMatchSnapshot('Footer.List');
    });
  });

  describe('Footer.Meta', () => {
    it('matches snapshot', () => {
      const { container } = render(<Footer.Meta />);

      expect(container).toMatchSnapshot('Footer.Meta');
    });

    it('has default visually hidden text', () => {
      const { container } = render(<Footer.Meta />);

      expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe(
        'Support links',
      );
    });

    it('has custom visually hidden text', () => {
      const { container } = render(<Footer.Meta visuallyHiddenText="Custom" />);

      expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Custom');
    });

    it('has default copyright text', () => {
      const { container } = render(<Footer.Meta />);

      expect(container).toContainHTML('<p class="nhsuk-body-s">© NHS England</p>');
    });

    it('has custom copyright text', () => {
      const { container } = render(
        <Footer.Meta>
          <Footer.Copyright>© East London NHS Foundation Trust</Footer.Copyright>
        </Footer.Meta>,
      );

      expect(container).toContainHTML(
        '<p class="nhsuk-body-s">© East London NHS Foundation Trust</p>',
      );
    });
  });

  describe('Footer.ListItem', () => {
    it('matches snapshot', () => {
      const { container } = render(<Footer.ListItem />);

      expect(container).toMatchSnapshot('Footer.ListItem');
    });
  });

  describe('Footer.Copyright', () => {
    it('matches snapshot', () => {
      const { container } = render(<Footer.Copyright />);

      expect(container).toMatchSnapshot('Footer.Copyright');
    });
  });
});
