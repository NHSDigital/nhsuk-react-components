import React from 'react';
import { render } from '@testing-library/react';
import Panel from '..';

describe('Panel', () => {
  it('matches snapshot', () => {
    const { container } = render(<Panel />);

    expect(container).toMatchSnapshot('ListPanel');
  });

  it('renders label', () => {
    const { container } = render(<Panel label="Label" labelProps={{ className: 'test-label' }} />);
    const label = container.querySelector('.test-label');

    expect(label).toBeTruthy();
    expect(label?.textContent).toBe('Label');
  });

  it('renders back to top button', () => {
    const { container } = render(<Panel backToTop />);

    expect(container.querySelector('.nhsuk-back-to-top')).toBeTruthy();
  });

  it('does not render back to top button', () => {
    const { container } = render(<Panel />);

    expect(container.querySelector('.nhsuk-back-to-top')).toBeNull();
  });

  it('renders back to top button with custom text', () => {
    const { container } = render(<Panel backToTop backToTopButtonText="Custom" />);

    expect(container.querySelector('.nhsuk-back-to-top__link')?.textContent).toBe('Custom');
  });

  describe('ListPanel.Item', () => {
    it('matches snapshot', () => {
      const { container } = render(<Panel.Item />);

      expect(container).toMatchSnapshot('ListPanel.Item');
    });
  });

  describe('ListPanel.LinkItem', () => {
    it('matches snapshot', () => {
      const { container } = render(<Panel.LinkItem />);

      expect(container).toMatchSnapshot('ListPanel.LinkItem');
    });
  });
});
