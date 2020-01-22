import React from 'react';
import Col from '../Col';
import { shallow } from 'enzyme';

describe('Col', () => {
  it('matches snapshot', () => {
    const component = shallow(<Col width="full"></Col>);
    expect(component.hasClass('nhsuk-grid-column-full')).toBeTruthy();
    expect(component).toMatchSnapshot('Col');
    component.unmount();
  });
});
