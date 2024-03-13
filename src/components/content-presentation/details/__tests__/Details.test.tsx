import React from 'react';
import { render } from '@testing-library/react';
import Details from '../';

describe('Details', () => {
  it('matches snapshot', () => {
    const { container } = render(<Details />);

    expect(container).toMatchSnapshot('StandardDetails');
  });

  it('matches snapshot - with expander present', () => {
    const { container } = render(<Details expander />);

    expect(container).toMatchSnapshot('ExpanderDetails');
  });

  it('adds expander classes', () => {
    const { container } = render(<Details expander />);

    expect(container.querySelector('.nhsuk-expander')).toBeTruthy();
  });

  describe('Details.Summary', () => {
    it('matches snapshot', () => {
      const { container } = render(<Details.Summary>Content</Details.Summary>);

      expect(container).toMatchSnapshot('Details.Summary');
    });

    it('renders children', () => {
      const { container } = render(<Details.Summary>Content</Details.Summary>);
      const summaryText = container.querySelector('span.nhsuk-details__summary-text');

      expect(summaryText?.textContent).toBe('Content');
    });
  });

  describe('Details.Text', () => {
    it('matches snapshot', () => {
      const { container } = render(<Details.Text>Text</Details.Text>);

      expect(container).toMatchSnapshot('Details.Text');
    });
  });

  describe('Details.ExpanderGroup', () => {
    it('matches snapshot', () => {
      const { container } = render(<Details.ExpanderGroup />);

      expect(container).toMatchSnapshot('Details.ExpanderGroup');
    });
  });
});
