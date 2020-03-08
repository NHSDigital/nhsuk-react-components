import React from 'react';
import Col from '../Col';
import { shallow } from 'enzyme';
import { axe } from 'jest-axe';

describe('Col', () => {
  it('matches snapshot', () => {
    const component = shallow(<Col width="full"></Col>);
    expect(component.hasClass('nhsuk-grid-column-full')).toBeTruthy();
    expect(component).toMatchSnapshot('Col');
    component.unmount();
  });

  it('is accessible', async () => {
    const render = () => '<Col width="full"></Col>'
    const component = render();
    expect(await axe(component)).toHaveNoViolations();
  });
});
