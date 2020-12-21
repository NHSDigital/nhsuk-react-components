import React from 'react';
import TextLink from '../TextLink';
import { shallow } from 'enzyme';

describe('TextLink', () => {
  it('matches snapshot', () => {
    const element = shallow(<TextLink href="/test">Test</TextLink>);
    expect(element).toMatchSnapshot('TextLink');
    element.unmount();
  });
});
