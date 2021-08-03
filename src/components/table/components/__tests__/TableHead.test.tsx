import { mount, shallow } from 'enzyme';
import React, { useContext } from 'react';
import Table from '../../Table';
import TableSectionContext, { TableSection } from '../../TableSectionContext';
import TableHead from '../TableHead';

describe('Table.Head', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TableHead />);
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
        <TableHead>
          <TestComponent />
        </TableHead>
      </Table>,
    );

    expect(tableSection).toBe(TableSection.HEAD);
    wrapper.unmount();
  });
});
