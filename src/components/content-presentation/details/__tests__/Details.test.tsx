import React, { createRef } from 'react';
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

  it('forwards refs', () => {
    const ref = createRef<HTMLDetailsElement>();

    const { container } = render(<Details ref={ref} />);

    const detailsEl = container.querySelector('details');

    expect(ref.current).toBe(detailsEl);
    expect(ref.current).toHaveClass('nhsuk-details');
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
