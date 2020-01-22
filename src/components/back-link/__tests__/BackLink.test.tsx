import React from 'react';
import BackLink from '..';
import { shallow } from 'enzyme';

describe('BackLink', () => {
  it('matches snapshot', () => {
    const component = shallow(<BackLink href="/back">Back</BackLink>);
    expect(component).toMatchSnapshot('BackLink');
    component.unmount();
  });
});
