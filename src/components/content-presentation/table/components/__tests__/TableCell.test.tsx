import React from 'react';
import { render } from '@testing-library/react';

import Table from '../../Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHead from '../TableHead';
import TableRow from '../TableRow';

describe('Table.Cell', () => {
  it('matches snapshot', () => {
    const { container } = render(<TableCell />);

    expect(container).toMatchSnapshot();
  });

  it('prints dev warning when used outside of a head or body', () => {
    jest.spyOn(console, 'warn').mockImplementation();
    render(
      <table>
        <thead>
          <tr>
            <TableCell />
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
        <TableHead>
          <TableRow>
            <TableCell id="test-id" />
          </TableRow>
        </TableHead>
      </Table>,
    );
    const cellWrapper = container.querySelector('th.nhsuk-table__header');

    expect(cellWrapper).toBeTruthy();
  });

  it('returns td element when inside a Table.Body', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell id="test-id" />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const cellWrapper = container.querySelector('td.nhsuk-table__cell');

    expect(cellWrapper).toBeTruthy();
  });

  it('adds responsive heading when _responsive=True', () => {
    const { container } = render(
      <Table responsive>
        <TableHead>
          <TableRow>
            <TableCell>TestHeading</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell id="test-id" />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const cellElement = container.querySelector('td');
    const spanWrapper = container.querySelector('td > span');

    expect(cellElement).toBeTruthy();
    expect(spanWrapper?.textContent).toBe('TestHeading ');
  });

  it('adds the numeric class when isNumeric is true', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell data-test="cell" isNumeric />
          </tr>
        </tbody>
      </table>,
    );
    const cell = container.querySelector('td[data-test="cell"].nhsuk-table__cell--numeric');

    expect(cell).toBeTruthy();
  });

  it('adds the numeric header class when isNumeric is true', () => {
    const { container } = render(
      <table>
        <TableHead>
          <tr>
            <TableCell data-test="cell" isNumeric />
          </tr>
        </TableHead>
      </table>,
    );
    const cell = container.querySelector('th[data-test="cell"].nhsuk-table__header--numeric');

    expect(cell).toBeTruthy();
  });

  it('does not add the numeric header when isNumeric is false', () => {
    const { container } = render(
      <table>
        <TableHead>
          <tr>
            <TableCell data-test="header" />
          </tr>
        </TableHead>
        <tbody>
          <tr>
            <TableCell data-test="cell" />
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
