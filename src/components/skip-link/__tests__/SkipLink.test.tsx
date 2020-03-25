import React, { createRef } from 'react';
import { shallow } from 'enzyme';
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
});
