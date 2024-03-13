import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import Table from '../../Table';
import TableSectionContext, { TableSection } from '../../TableSectionContext';
import TableBody from '../TableBody';

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
