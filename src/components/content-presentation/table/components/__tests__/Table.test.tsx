import { createRef } from 'react';

import { Table } from '../..';

import { renderClient, renderServer } from '#util/components';

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

  const ExampleWithHtml = (props: Parameters<typeof Table>[0]) => (
    <Table caption="Skin symptoms and possible causes" {...props}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Type</Table.Cell>
          <Table.Cell>Description</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>id</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>The ID of the table.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>rows</Table.Cell>
          <Table.Cell>array</Table.Cell>
          <Table.Cell>
            <strong>Required.</strong> The rows within the table component.{' '}
            <a href="#/macro-options">See macro options for rows</a>.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>head</Table.Cell>
          <Table.Cell>array</Table.Cell>
          <Table.Cell>
            Can be used to add a row of table header cells (
            <code className="app-code">&lt;th&gt;</code>) at the top of the table component.{' '}
            <a href="#/macro-options">See macro options for head</a>.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>caption</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>Caption text.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>captionClasses</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>
            Classes for caption text size. Classes should correspond to the available typography
            heading classes.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>firstCellIsHeader</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>
            If set to <code className="app-code">true</code>, the first cell in each row will be a
            table header (<code className="app-code">&lt;th&gt;</code>).
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>classes</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>Classes to add to the table container.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>attributes</Table.Cell>
          <Table.Cell>object</Table.Cell>
          <Table.Cell>
            HTML attributes (for example data attributes) to add to the table container.
          </Table.Cell>
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

    expect(container).toMatchSnapshot();

    await renderClient(element, {
      className: 'nhsuk-table',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with custom HTML', async () => {
    const { container } = await renderClient(<ExampleWithHtml />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with custom HTML when responsive', async () => {
    const { container } = await renderClient(<ExampleWithHtml responsive />, {
      className: 'nhsuk-table-responsive',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with custom HTML when first cell is header', async () => {
    const { container } = await renderClient(<ExampleWithHtml firstCellIsHeader />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with custom HTML (via server)', async () => {
    const { container, element } = await renderServer(<ExampleWithHtml />, {
      className: 'nhsuk-table',
    });

    expect(container).toMatchSnapshot();

    await renderClient(element, {
      className: 'nhsuk-table',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot();
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
