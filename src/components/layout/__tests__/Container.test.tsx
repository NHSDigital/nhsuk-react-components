import React from 'react';
import Container from '../Container';
import { shallow } from 'enzyme';

describe('Container', () => {
  it('matches snapshot', () => {
    const component = shallow(<Container />);
    expect(component.hasClass('nhsuk-width-container-fluid')).toBeFalsy();
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('adds fluid classes', () => {
    const component = shallow(<Container fluid />);
    expect(component.hasClass('nhsuk-width-container-fluid')).toBeTruthy();
    component.unmount();
  });
});
