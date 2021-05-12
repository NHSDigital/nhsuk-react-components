import React from 'react';
import { shallow } from 'enzyme';
import BodyText from '../BodyText';

describe('BodyText', () => {
  it('matches snapshot', () => {
    const element = shallow(<BodyText>Text</BodyText>);
    expect(element.text()).toBe('Text');
    expect(element).toMatchSnapshot();
    expect(element.hasClass('nhsuk-body')).toBeTruthy();
    element.unmount();
  });
});
