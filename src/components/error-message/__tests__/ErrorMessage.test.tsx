import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '..';

describe('ErrorMessage', () => {
  it('matches snapshot', () => {
    const element = shallow(<ErrorMessage>Error</ErrorMessage>);
    expect(element).toMatchSnapshot('ErrorMessage');
    element.unmount();
  });

  it('has default visuallyHiddenText', () => {
    const element = shallow(<ErrorMessage>Error</ErrorMessage>);
    expect(element.find('.nhsuk-u-visually-hidden').text()).toBe('Error: ');
    element.unmount();
  });

  it('has disabled visuallyHiddenText', () => {
    const element = shallow(<ErrorMessage visuallyHiddenText={false}>Error</ErrorMessage>);
    expect(element.find('.nhsuk-u-visually-hidden').exists()).toBeFalsy();
    element.unmount();
  });

  it('has custom visuallyHiddenText', () => {
    const element = shallow(<ErrorMessage visuallyHiddenText="Custom">Error</ErrorMessage>);
    expect(element.find('.nhsuk-u-visually-hidden').text()).toBe('Custom');
    element.unmount();
  });
});
