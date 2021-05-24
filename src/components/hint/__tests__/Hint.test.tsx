import React from 'react';
import { shallow } from 'enzyme';
import Hint from '..';

describe('Hint', () => {
  it('matches snapshot', () => {
    const component = shallow(<Hint>Text</Hint>);
    expect(component.text()).toBe('Text');
    expect(component).toMatchSnapshot('Hint');
    component.unmount();
  });
});
