import React from 'react';
import { render } from '@testing-library/react';
import ListPanel from '../';

describe('ListPanel', () => {
  it('matches snapshot', () => {
    const { container } = render(<ListPanel />);

    expect(container).toMatchSnapshot('ListPanel');
  });

  it('renders a list', () => {
    const { container } = render(<ListPanel />);

    expect(container.querySelector('.nhsuk-list')).toBeTruthy();
  });

  describe('ListPanel.Panel', () => {
    it('matches snapshot', () => {
      const { container } = render(<ListPanel.Panel />);

      expect(container).toMatchSnapshot('ListPanel.Panel');
    });

    it('renders label', () => {
      const { container } = render(<ListPanel.Panel label="Label" />);
      const label = container.querySelector('.nhsuk-list-panel__label');

      expect(label).toBeTruthy();
      expect(label?.textContent).toBe('Label');
      expect(
        container.querySelector('.nhsuk-list-panel__list.nhsuk-list-panel__list--with-label'),
      ).toBeTruthy();
    });

    it('renders back to top button', () => {
      const { container } = render(<ListPanel.Panel backToTop />);

      expect(container.querySelector('.nhsuk-back-to-top')).toBeTruthy();
    });

    it('renders back to top button with custom text', () => {
      const { container } = render(<ListPanel.Panel backToTop backToTopButtonText="Custom" />);

      expect(container.querySelector('.nhsuk-back-to-top__link')?.textContent).toBe('Custom');
    });
  });

  describe('ListPanel.Item', () => {
    it('matches snapshot', () => {
      const { container } = render(<ListPanel.Item />);

      expect(container).toMatchSnapshot('ListPanel.Item');
    });
  });

  describe('ListPanel.LinkItem', () => {
    it('matches snapshot', () => {
      const { container } = render(<ListPanel.LinkItem />);

      expect(container).toMatchSnapshot('ListPanel.LinkItem');
    });
  });
});
