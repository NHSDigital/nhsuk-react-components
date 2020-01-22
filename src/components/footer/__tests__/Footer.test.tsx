import React from 'react';
import Footer from '..';
import { shallow, mount } from 'enzyme';

describe('Footer', () => {
  it('matches snapshot', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot('Footer');
    component.unmount();
  });
  it('has default visually hidden text', () => {
    const component = mount(<Footer />);
    expect(component.find('.nhsuk-u-visually-hidden').text()).toBe('Support links');
    component.unmount();
  });

  it('has disabled visually hidden text', () => {
    const component = mount(<Footer visuallyHiddenText={false} />);
    expect(component.find('.nhsuk-u-visually-hidden').exists()).toBeFalsy();
    component.unmount();
  });

  it('has custom visually hidden text', () => {
    const component = mount(<Footer visuallyHiddenText="Custom" />);
    expect(component.find('.nhsuk-u-visually-hidden').text()).toBe('Custom');
    component.unmount();
  });

  describe('Footer.List', () => {
    it('matches snapshot', () => {
      const component = shallow(<Footer.List />);
      expect(component).toMatchSnapshot('Footer.List');
      component.unmount();
    });

    it('adds class when columns', () => {
      const component = shallow(<Footer.List columns />);
      expect(component.hasClass('nhsuk-footer__list--three-columns')).toBeTruthy();
      component.unmount();
    });
  });

  describe('Footer.ListItem', () => {
    it('matches snapshot', () => {
      const component = shallow(<Footer.ListItem />);
      expect(component).toMatchSnapshot('Footer.ListItem');
      component.unmount();
    });
  });

  describe('Footer.Copyright', () => {
    it('matches snapshot', () => {
      const component = shallow(<Footer.Copyright />);
      expect(component).toMatchSnapshot('Footer.Copyright');
      component.unmount();
    });
  });
});
