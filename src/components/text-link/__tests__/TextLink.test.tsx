import React from 'react';
import { shallow } from 'enzyme';
import TextLink from '../TextLink';

describe('TextLink', () => {
  it('matches snapshot', () => {
    const element = shallow(<TextLink href="/test">Test</TextLink>);
    expect(element).toMatchSnapshot('TextLink');
    element.unmount();
  });
});
