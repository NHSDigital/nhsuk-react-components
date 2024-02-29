import React from 'react';
import { shallow } from 'enzyme';
import BackLink from '..';

describe('BackLink', () => {
  it('matches snapshot', () => {
    const component = shallow(<BackLink href="/back">Back</BackLink>);
    expect(component).toMatchSnapshot('BackLink');
    component.unmount();
  });
});
