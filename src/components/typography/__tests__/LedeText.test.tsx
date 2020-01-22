import React from 'react';
import LedeText from '../LedeText';
import { shallow } from 'enzyme';

describe('LedeText', () => {
  it('matches snapshot', () => {
    const element = shallow(<LedeText>Text</LedeText>);
    expect(element.text()).toBe('Text');
    expect(element).toMatchSnapshot();
    expect(element.hasClass('nhsuk-lede-text')).toBeTruthy();
    element.unmount();
  });
});
