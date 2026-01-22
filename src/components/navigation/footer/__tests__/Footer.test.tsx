import { render } from '@testing-library/react';

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

    it('matches snapshot with list item', () => {
      const { container } = render(
        <Footer.Meta>
          <Footer.ListItem href="#">Example link</Footer.ListItem>
        </Footer.Meta>,
      );

      expect(container).toMatchSnapshot();
    });

    it('has default visually hidden text', () => {
      const { container } = render(
        <Footer.Meta>
          <Footer.ListItem href="#">Example link</Footer.ListItem>
        </Footer.Meta>,
      );

      const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

      expect(visuallyHiddenEl).toHaveTextContent('Support links');
    });

    it('has custom visually hidden text', () => {
      const { container } = render(
        <Footer.Meta visuallyHiddenText="Custom">
          <Footer.ListItem href="#">Example link</Footer.ListItem>
        </Footer.Meta>,
      );

      const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

      expect(visuallyHiddenEl).toHaveTextContent('Custom');
    });

    it('has custom visually hidden HTML', () => {
      const { container } = render(
        <Footer.Meta
          visuallyHiddenText={
            <>
              Custom <em>with HTML</em>
            </>
          }
        >
          <Footer.ListItem href="#">Example link</Footer.ListItem>
        </Footer.Meta>,
      );

      const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

      expect(visuallyHiddenEl).toHaveTextContent('Custom with HTML');
      expect(visuallyHiddenEl).toContainHTML('Custom <em>with HTML</em>');
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
