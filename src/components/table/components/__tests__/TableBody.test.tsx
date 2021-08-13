import { mount, shallow } from 'enzyme';
import React, { useContext } from 'react';
import Table from '../../Table';
import TableSectionContext, { TableSection } from '../../TableSectionContext';
import TableBody from '../TableBody';

describe('Table.Body', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TableBody />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
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

    const wrapper = mount(
      <Table>
        <TableBody>
          <TestComponent />
        </TableBody>
      </Table>,
    );

    expect(tableSection).toBe(TableSection.BODY);
    wrapper.unmount();
  });
});
