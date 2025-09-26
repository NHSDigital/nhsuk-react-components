import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import { renderClient, renderServer } from '@util/components';
import Details from '../';

describe('Details', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(<Details />, {
      className: 'nhsuk-details',
    });

    expect(container).toMatchSnapshot('StandardDetails');
  });

  it('matches snapshot - with expander present', async () => {
    const { container } = await renderClient(<Details expander />, {
      className: 'nhsuk-details',
    });

    expect(container).toMatchSnapshot('ExpanderDetails');
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(<Details />, {
      className: 'nhsuk-details',
    });

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-details',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('adds expander classes', async () => {
    const { modules } = await renderClient(<Details expander />, {
      className: 'nhsuk-details',
    });

    const [detailsEl] = modules;
    expect(detailsEl).toHaveClass('nhsuk-expander');
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLDetailsElement>();

    const { modules } = await renderClient(<Details ref={ref} />, {
      className: 'nhsuk-details',
    });

    const [detailsEl] = modules;

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
