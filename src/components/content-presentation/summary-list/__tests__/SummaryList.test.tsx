import { render } from '@testing-library/react';
import { createRef } from 'react';

import { SummaryList } from '..';

describe('SummaryList', () => {
  it('matches snapshot', () => {
    const { container } = render(<SummaryList />);

    expect(container).toMatchSnapshot('SummaryList');
  });

  it('matches snapshot without border', () => {
    const { container } = render(<SummaryList noBorder />);

    expect(container).toMatchSnapshot();
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

      expect(container).toHaveTextContent('Row');
      expect(container).toMatchSnapshot();
    });

    it('matches snapshot without border', () => {
      const { container } = render(<SummaryList.Row noBorder>Row</SummaryList.Row>);

      expect(container).toHaveTextContent('Row');
      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Key', () => {
    it('matches snapshot', () => {
      const { container } = render(<SummaryList.Key>Example key</SummaryList.Key>);

      expect(container).toHaveTextContent('Example key');
      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Value', () => {
    it('matches snapshot', () => {
      const { container } = render(<SummaryList.Value>Example value</SummaryList.Value>);

      expect(container).toHaveTextContent('Example value');
      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Actions', () => {
    it('matches snapshot', () => {
      const { container } = render(
        <SummaryList.Actions>
          <SummaryList.Action href="#" visuallyHiddenText="example key">
            Edit
          </SummaryList.Action>
          <SummaryList.Action href="#" visuallyHiddenText="example key">
            Delete
          </SummaryList.Action>
        </SummaryList.Actions>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('SummaryList.Action', () => {
    it('matches snapshot', () => {
      const { container } = render(
        <SummaryList.Action href="#" visuallyHiddenText="example key">
          Edit
        </SummaryList.Action>,
      );

      expect(container).toHaveTextContent('Edit example key');
      expect(container).toMatchSnapshot();
    });

    it('forwards refs', () => {
      const ref = createRef<HTMLAnchorElement>();

      const { container } = render(
        <SummaryList.Action href="#" visuallyHiddenText="example key" ref={ref}>
          Edit
        </SummaryList.Action>,
      );

      const rowActionEl = container.querySelector('a');

      expect(ref.current).toBe(rowActionEl);
      expect(ref.current).toHaveAttribute('href', '#');
    });
  });
});
