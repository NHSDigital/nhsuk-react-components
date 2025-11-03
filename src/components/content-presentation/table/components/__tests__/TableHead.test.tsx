import { render } from '@testing-library/react';

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
    const mock = jest.fn();

    render(
      <Table>
        <TableHead>
          <TableSectionContext.Consumer>
            {(section) => {
              return mock(section);
            }}
          </TableSectionContext.Consumer>
        </TableHead>
      </Table>,
    );

    expect(mock).toHaveBeenCalledWith(TableSection.HEAD);
  });
});
