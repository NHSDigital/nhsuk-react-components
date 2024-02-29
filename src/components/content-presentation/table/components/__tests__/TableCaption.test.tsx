import { shallow } from 'enzyme';
import React from 'react';
import TableCaption from '../TableCaption';

describe('TableCaption', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TableCaption />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
