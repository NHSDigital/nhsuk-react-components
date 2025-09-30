import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import Table from '../../Table';
import TableSectionContext, { TableSection } from '../../TableSectionContext';
import TableHead from '../TableHead';

describe('Table.Head', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Table>
        <TableHead />
      </Table>,
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
        <TableHead>
          <TestComponent />
        </TableHead>
      </Table>,
    );

    expect(tableSection).toBe(TableSection.HEAD);
  });
});
