import React from 'react';
import ActionLink from '../ActionLink';
import { shallow } from 'enzyme';

describe('ActionLink', () => {
  it('matches snapshot', () => {
    const element = shallow(<ActionLink href="/test">Test</ActionLink>);
    expect(element).toMatchSnapshot('ActionLink');
    element.unmount();
  });
});
