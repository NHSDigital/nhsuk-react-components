import React, { createRef } from 'react';
import { shallow, mount } from 'enzyme';
import SkipLink from '..';

describe('SkipLink', () => {
  it('matches snapshot', () => {
    const component = shallow(<SkipLink />);
    expect(component).toMatchSnapshot('SkipLink');
    component.unmount();
  });

  it('does not add focusTargetRef or disableDefaultBehaviour as attributes when rendered', () => {
    const ref = createRef<HTMLElement>();
    const component = shallow(<SkipLink focusTargetRef={ref} disableDefaultBehaviour aria-label="test" />);
    expect(component.prop('focusTargetRef')).toBeUndefined();
    expect(component.prop('disableDefaultBehaviour')).toBeUndefined();
    expect(component.prop('aria-label')).toEqual('test');
    component.unmount();
  });

  it('sets the href to #maincontent by default', () => {
    const component = mount(<SkipLink />);
    expect(component.find('.nhsuk-skip-link').prop('href')).toBe('#maincontent');
  });

  it('calls onClick callback when clicked', () => {
    const onClick = jest.fn();
    const component = mount(<SkipLink onClick={onClick} />);
    component.find('.nhsuk-skip-link').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('does not set the href to #maincontent if disableDefaultBehaviour is set', () => {
    const onClick = jest.fn();
    const component = mount(<SkipLink disableDefaultBehaviour onClick={onClick} />);
    expect(component.find('.nhsuk-skip-link').prop('href')).toBeUndefined();
  });
});
