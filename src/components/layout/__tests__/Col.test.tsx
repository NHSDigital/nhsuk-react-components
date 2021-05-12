import React from 'react';
import { shallow } from 'enzyme';
import Col from '../Col';

describe('Col', () => {
  it('matches snapshot', () => {
    const component = shallow(<Col width="full" />);
    expect(component.hasClass('nhsuk-grid-column-full')).toBeTruthy();
    expect(component).toMatchSnapshot('Col');
    component.unmount();
  });
});
