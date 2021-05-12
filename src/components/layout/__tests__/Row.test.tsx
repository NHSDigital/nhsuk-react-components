import React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';

describe('Row', () => {
  it('matches snapshot', () => {
    const component = shallow(<Row />);
    expect(component).toMatchSnapshot('Row');
    component.unmount();
  });
});
