import { mount, shallow } from 'enzyme';
import React from 'react';
import Table from '../../Table';
import TableBody from '../TableBody';

import TableCell from '../TableCell';
import TableHead from '../TableHead';
import TableRow from '../TableRow';

describe('Table.Cell', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TableCell />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('prints dev warning when used outside of a head or body', () => {
    jest.spyOn(console, 'warn').mockImplementation();
    const wrapper = mount(
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
    wrapper.unmount();
  });

  it('returns th element when inside a Table.Head', () => {
    const wrapper = mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell id="test-id" />
          </TableRow>
        </TableHead>
      </Table>,
    );

    const cellWrapper = wrapper.find('th');

    expect(cellWrapper.exists()).toBeTruthy();
    expect(cellWrapper.hasClass('nhsuk-table__header')).toBeTruthy();
    wrapper.unmount();
  });

  it('returns td element when inside a Table.Body', () => {
    const wrapper = mount(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell id="test-id" />
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cellWrapper = wrapper.find('td');

    expect(cellWrapper.exists()).toBeTruthy();
    expect(cellWrapper.hasClass('nhsuk-table__cell')).toBeTruthy();
    wrapper.unmount();
  });

  it('adds responsive heading when _responsive=True', () => {
    const wrapper = mount(
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

    const cellWrapper = wrapper.find('td');
    expect(cellWrapper.exists()).toBeTruthy();
    expect(cellWrapper.prop('role')).toBe('cell');

    const spanWrapper = cellWrapper.find('span');
    expect(spanWrapper.exists()).toBeTruthy();
    expect(spanWrapper.text()).toBe('TestHeading ');

    wrapper.unmount();
  });
});
