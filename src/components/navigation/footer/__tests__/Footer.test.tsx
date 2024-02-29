import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../';

jest.spyOn(console, 'warn').mockImplementation();

describe('Footer', () => {
  it('matches snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot('Footer');
  });
  it('has default visually hidden text', () => {
    const { container } = render(<Footer />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Support links');
  });

  it('has disabled visually hidden text', () => {
    const { container } = render(<Footer visuallyHiddenText={false} />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')).toBeFalsy();
  });

  it('has custom visually hidden text', () => {
    const { container } = render(<Footer visuallyHiddenText="Custom" />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Custom');
  });

  it('Includes the single column class on ListItem when there is only one column', () => {
    const { container } = render(
      <Footer>
        <Footer.List>
          <Footer.ListItem id="test-listItem"></Footer.ListItem>
        </Footer.List>
      </Footer>,
    );

    expect(container.querySelector('#test-listItem')?.parentElement).toHaveClass(
      'nhsuk-footer-default__list-item',
    );
  });

  it('Does not include the single column class on ListItem when there is more than one column', () => {
    const { container } = render(
      <Footer>
        <Footer.List>
          <Footer.ListItem id="test-listItem"></Footer.ListItem>
        </Footer.List>
        <Footer.List>
          <Footer.ListItem id="test-listItem2"></Footer.ListItem>
        </Footer.List>
      </Footer>,
    );

    expect(container.querySelector('#test-listItem')?.parentElement).not.toHaveClass(
      'nhsuk-footer-default__list-item',
    );
    expect(container.querySelector('#test-listItem2')?.parentElement).not.toHaveClass(
      'nhsuk-footer-default__list-item',
    );
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
