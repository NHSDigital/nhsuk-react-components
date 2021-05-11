import React from 'react';
import { shallow } from 'enzyme';
import ActionLink from '../ActionLink';

describe('ActionLink', () => {
  it('matches snapshot', () => {
    const element = shallow(<ActionLink href="/test">Test</ActionLink>);
    expect(element).toMatchSnapshot('ActionLink');
    element.unmount();
  });
});
