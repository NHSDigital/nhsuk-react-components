import { shallow } from 'enzyme';
import React from 'react';
import TableContainer from '../TableContainer';

describe('TableContainer', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<TableContainer />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
