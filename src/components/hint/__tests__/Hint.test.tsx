import React from 'react';
import Hint from '..';
import { shallow } from 'enzyme';

describe('Hint', () => {
  it('matches snapshot', () => {
    const component = shallow(<Hint>Text</Hint>);
    expect(component.text()).toBe('Text');
    expect(component).toMatchSnapshot('Hint');
    component.unmount();
  });
});
