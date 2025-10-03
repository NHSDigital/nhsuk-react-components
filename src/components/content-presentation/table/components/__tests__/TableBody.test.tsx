import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import { TableBody } from '..';
import { Table, TableSection, TableSectionContext } from '../..';

describe('Table.Body', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <table>
        <TableBody />
      </table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('exposes TableSectionContext', () => {
    let tableSection: TableSection = TableSection.NONE;

    const TestComponent = () => {
      const tableContext = useContext(TableSectionContext);

      if (tableSection !== tableContext) {
        tableSection = tableContext;
      }

      return null;
    };

    render(
      <Table>
        <TableBody>
          <TestComponent />
        </TableBody>
      </Table>,
    );

    expect(tableSection).toBe(TableSection.BODY);
  });
});
