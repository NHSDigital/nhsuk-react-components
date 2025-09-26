import React, { createRef } from 'react';
import { renderClient, renderServer } from '@util/components';
import Table from '../..';

describe('Table', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(<Table />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(<Table />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-table',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLTableElement>();

    const { container } = await renderClient(<Table ref={ref} />, {
      className: 'nhsuk-table',
    });

    const tableEl = container.querySelector('table');

    expect(ref.current).toBe(tableEl);
    expect(ref.current).toHaveClass('nhsuk-table');
  });
});
