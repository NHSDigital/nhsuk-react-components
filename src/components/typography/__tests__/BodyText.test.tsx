import React from 'react';
import BodyText from '../BodyText';
import { shallow } from 'enzyme';

describe('BodyText', () => {
  it('matches snapshot', () => {
    const element = shallow(<BodyText>Text</BodyText>);
    expect(element.text()).toBe('Text');
    expect(element).toMatchSnapshot();
    expect(element.hasClass('nhsuk-body')).toBeTruthy();
    element.unmount();
  });
});
