import { shallow } from 'enzyme';
import React, { ComponentProps } from 'react';
import Tag from '../Tag';

describe('Tag', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Tag>Active</Tag>);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('strong').props().className).toBe('nhsuk-tag');

    wrapper.unmount();
  });

  it.each<ComponentProps<typeof Tag>['color']>([
    'white',
    'grey',
    'green',
    'aqua-green',
    'blue',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
  ])('adds colour class %s ', (colour) => {
    const wrapper = shallow(<Tag color={colour} />);

    expect(wrapper.find('strong').props().className).toBe(`nhsuk-tag nhsuk-tag--${colour}`);

    wrapper.unmount();
  });
});
