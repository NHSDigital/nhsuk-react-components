import React from 'react';
import { mount, shallow } from 'enzyme';
import ReviewDate from '..';

describe('ReviewDate', () => {
  it('matches snapshot', () => {
    const element = shallow(<ReviewDate />);
    expect(element).toMatchSnapshot('ReviewDate');
    element.unmount();
  });

  it('works with lastReview and nextReview', () => {
    const element = shallow(
      <ReviewDate lastReviewed="19 November 2019" nextReview="19 November 2020" />,
    );
    expect(element.containsMatchingElement(<br />)).toBeTruthy();
    expect(element.text()).toBe(
      'Page last reviewed: 19 November 2019Next review due: 19 November 2020',
    );
    element.unmount();
  });
});

describe('dev warnings', () => {
  jest.spyOn(console, 'warn');
  it('warns when ReviewDate is used', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const component = mount(<ReviewDate />);
    expect(spy).toHaveBeenCalled();
    component.unmount();
  });
});
