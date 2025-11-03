import { render } from '@testing-library/react';

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
    const mock = jest.fn();

    render(
      <Table>
        <TableBody>
          <TableSectionContext.Consumer>
            {(section) => {
              return mock(section);
            }}
          </TableSectionContext.Consumer>
        </TableBody>
      </Table>,
    );

    expect(mock).toHaveBeenCalledWith(TableSection.BODY);
  });
});
