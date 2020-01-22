import React from 'react';
import Row from '../Row';
import { shallow } from 'enzyme';

describe('Row', () => {
  it('matches snapshot', () => {
    const component = shallow(<Row />);
    expect(component).toMatchSnapshot('Row');
    component.unmount();
  });
});
