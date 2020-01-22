import React from 'react';
import InsetText from '..';
import { shallow } from 'enzyme';

describe('InsetText', () => {
  it('matches snapshot', () => {
    const component = shallow(<InsetText />);
    expect(component).toMatchSnapshot('InsetText');
    component.unmount();
  });

  it('has default visually hidden text', () => {
    const component = shallow(<InsetText />);
    expect(component.find('.nhsuk-u-visually-hidden').text()).toBe('Information: ');
    component.unmount();
  });

  it('has disabled visually hidden text', () => {
    const component = shallow(<InsetText visuallyHiddenText={false} />);
    expect(component.find('.nhsuk-u-visually-hidden').exists()).toBeFalsy();
    component.unmount();
  });

  it('has custom visually hidden text', () => {
    const component = shallow(<InsetText visuallyHiddenText="Custom"></InsetText>);
    expect(component.find('.nhsuk-u-visually-hidden').text()).toBe('Custom');
    component.unmount();
  });

  it('renders children', () => {
    const component = shallow(<InsetText>Child</InsetText>);
    expect(component.text()).toBe('Information: Child');
    component.unmount();
  });
});
