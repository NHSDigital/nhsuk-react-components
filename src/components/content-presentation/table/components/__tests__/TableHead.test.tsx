import { render } from '@testing-library/react';
import { useContext } from 'react';
import { TableHead } from '..';
import { Table, TableSection, TableSectionContext } from '../..';

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
