import { mount } from 'enzyme';
import React from 'react';
import TableRow from '../TableRow';

describe('Table.Row', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <table>
        <TableRow />
      </table>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
