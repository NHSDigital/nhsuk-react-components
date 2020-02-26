import React from 'react';
import { shallow } from 'enzyme';
import SubNavigation from '..';

describe('SubNavigation', () => {
  it('matches snapshot', () => {
    const component = shallow(<SubNavigation />);
    expect(component).toMatchSnapshot('SubNavigation');
    component.unmount();
  });

  it('should have correct classes applied', () => {
    const component = shallow(<SubNavigation />);
    const unorderedList = component.find('.nhsuk-sub-navigation__list');

    expect(component.hasClass('nhsuk-sub-navigation')).toBeTruthy();
    expect(unorderedList.exists()).toBeTruthy();

    component.unmount();
  });

  describe('SubNavigationItem', () => {
    it('matches snapshot', () => {
      const component = shallow(
        <SubNavigation.SubNavigationItem text="Hello world" target="#">
        </SubNavigation.SubNavigationItem>,
      );

      expect(component).toMatchSnapshot('SubNavigation.SubNavigationItem');

      component.unmount();
    });

    it('should have the correct classes applied', () => {
      const component = shallow(
        <SubNavigation.SubNavigationItem text="Hello world" target="#" active>
        </SubNavigation.SubNavigationItem>,
      );

      expect(component.hasClass('nhsuk-sub-navigation__item')).toBeTruthy();

      component.unmount();
    });

    it('passes inner text correctly', () => {
      const component = shallow(
        <SubNavigation.SubNavigationItem text="Hello world" target="https://nhs.uk">
        </SubNavigation.SubNavigationItem>,
      );

      expect(component.text()).toEqual('Hello world');

      component.unmount();
    });
  });
});
