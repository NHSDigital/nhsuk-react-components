import { mount, shallow } from 'enzyme';
import React from 'react';
import TablePanel from '../TablePanel';

describe('Table.Panel', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TablePanel />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('HeadingLevel').exists()).toBeFalsy();

    wrapper.unmount();
  });

  it('adds header when prop added', () => {
    const wrapper = mount(
      <TablePanel heading="TestHeading" headingProps={{ headingLevel: 'h2' }} />,
    );

    expect(wrapper).toMatchSnapshot();
    const heading = wrapper.find('h2');

    expect(heading.exists()).toBeTruthy();
    expect(heading.prop('className')).toBe('nhsuk-table__heading-tab');
    expect(heading.type()).toBe('h2');

    wrapper.unmount();
  });
});
