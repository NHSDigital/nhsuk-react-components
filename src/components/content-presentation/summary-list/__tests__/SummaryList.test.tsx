import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import SummaryList from '../';

describe('SummaryList', () => {
  it('matches snapshot', () => {
    const { container } = render(<SummaryList />);

    expect(container).toMatchSnapshot('SummaryList');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDListElement>();

    const { container } = render(<SummaryList ref={ref} />);

    const insetTextEl = container.querySelector('dl');

    expect(ref.current).toBe(insetTextEl);
    expect(ref.current).toHaveClass('nhsuk-summary-list');
  });

  it('adds css classes when noBorder prop supplied', () => {
    const { container } = render(<SummaryList noBorder />);

    expect(container.querySelector('.nhsuk-summary-list--no-border')).toBeTruthy();
  });

  describe('SummaryList.Row', () => {
    it('matches snapshot', () => {
      const { container } = render(<SummaryList.Row>Row</SummaryList.Row>);

      expect(container.textContent).toBe('Row');
      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Key', () => {
    it('matches snapshot', () => {
      const { container } = render(<SummaryList.Key>Key</SummaryList.Key>);

      expect(container.textContent).toBe('Key');
      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Value', () => {
    it('matches snapshot', () => {
      const { container } = render(<SummaryList.Value>Value</SummaryList.Value>);

      expect(container.textContent).toBe('Value');
      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Actions', () => {
    it('matches snapshot', () => {
      const { container } = render(<SummaryList.Actions>Actions</SummaryList.Actions>);

      expect(container.textContent).toBe('Actions');
      expect(container).toMatchSnapshot();
    });
  });
});
