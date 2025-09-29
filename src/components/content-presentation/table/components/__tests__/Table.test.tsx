import React, { createRef } from 'react';
import { renderClient, renderServer } from '@util/components';
import Table from '../..';

describe('Table', () => {
  const Example = (props: Parameters<typeof Table>[0]) => (
    <Table caption="Skin symptoms and possible causes" {...props}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin Symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>eczema</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy blisters</Table.Cell>
          <Table.Cell>shingles, chickenpox</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );

  it('matches snapshot', async () => {
    const { container } = await renderClient(<Example />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot when responsive', async () => {
    const { container } = await renderClient(<Example responsive />, {
      className: 'nhsuk-table-responsive',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot when first cell is header', async () => {
    const { container } = await renderClient(<Example firstCellIsHeader />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(<Example />, {
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
