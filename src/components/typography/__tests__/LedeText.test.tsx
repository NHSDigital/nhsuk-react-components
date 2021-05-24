import React from 'react';
import { shallow } from 'enzyme';
import LedeText from '../LedeText';

describe('LedeText', () => {
  it('matches snapshot', () => {
    const element = shallow(<LedeText>Text</LedeText>);
    expect(element.text()).toBe('Text');
    expect(element).toMatchSnapshot();
    expect(element.hasClass('nhsuk-lede-text')).toBeTruthy();
    element.unmount();
  });
});
