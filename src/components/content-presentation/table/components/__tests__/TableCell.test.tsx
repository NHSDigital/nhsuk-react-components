import { render } from '@testing-library/react';
import { Table } from '../..';

describe('Table.Cell', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('prints dev warning when used outside of a head or body', () => {
    jest.spyOn(console, 'warn').mockImplementation();

    render(
      <table>
        <thead>
          <tr>
            <Table.Cell>Cell</Table.Cell>
          </tr>
        </thead>
      </table>,
    );

    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenLastCalledWith(
      'Table.Cell used outside of a Table.Head or Table.Body component. Unable to determine section type from context.',
    );
  });

  it('returns th element when inside a Table.Head', () => {
    const { container } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell id="test-id">Cell</Table.Cell>
          </Table.Row>
        </Table.Head>
      </Table>,
    );
    const cellWrapper = container.querySelector('th.nhsuk-table__header');

    expect(cellWrapper).toBeTruthy();
  });

  it('returns td element when inside a Table.Body', () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell id="test-id" />
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const cellWrapper = container.querySelector('td.nhsuk-table__cell');

    expect(cellWrapper).toBeTruthy();
  });

  it('adds responsive heading when responsive', () => {
    const { container } = render(
      <Table responsive>
        <Table.Head>
          <Table.Row>
            <Table.Cell>TestHeading</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell id="test-id" />
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const cellElement = container.querySelector('td');
    const spanWrapper = container.querySelector('td > span');

    expect(cellElement).toBeTruthy();
    expect(spanWrapper?.textContent).toBe('TestHeading ');
  });

  it('adds the numeric class when `format: numeric` is set', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <Table.Cell data-test="cell" format="numeric" />
          </tr>
        </tbody>
      </table>,
    );
    const cell = container.querySelector('td[data-test="cell"].nhsuk-table__cell--numeric');

    expect(cell).toBeTruthy();
  });

  it('adds the numeric header class when `format: numeric` is set', () => {
    const { container } = render(
      <table>
        <Table.Head>
          <tr>
            <Table.Cell data-test="cell" format="numeric" />
          </tr>
        </Table.Head>
      </table>,
    );
    const cell = container.querySelector('th[data-test="cell"].nhsuk-table__header--numeric');

    expect(cell).toBeTruthy();
  });

  it('does not add the numeric header when `format: numeric` is omitted', () => {
    const { container } = render(
      <table>
        <Table.Head>
          <tr>
            <Table.Cell data-test="header" />
          </tr>
        </Table.Head>
        <tbody>
          <tr>
            <Table.Cell data-test="cell" />
          </tr>
        </tbody>
      </table>,
    );
    const header = container.querySelector('th[data-test="header"].nhsuk-table__header--numeric');
    const cell = container.querySelector('td[data-test="cell"].nhsuk-table__header--numeric');

    expect(header).toBeFalsy();
    expect(cell).toBeFalsy();
  });
});
