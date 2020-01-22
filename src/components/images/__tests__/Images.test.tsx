import React from 'react';
import Images from '..';
import { shallow } from 'enzyme';

describe('Images', () => {
  it('matches snapshot', () => {
    const component = shallow(<Images />);
    expect(component.hasClass('nhsuk-image')).toBeTruthy();
    expect(component).toMatchSnapshot('Images');
    component.unmount();
  });

  it('renders caption', () => {
    const component = shallow(<Images caption="Caption" />);
    expect(component.find('figcaption').exists()).toBeTruthy();
    expect(component.find('figcaption').hasClass('nhsuk-image__caption')).toBeTruthy();
    expect(component.find('figcaption').text()).toBe('Caption');
    component.unmount();
  });
});
