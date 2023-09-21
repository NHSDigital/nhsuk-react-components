import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '..';
import { NHSUKFrontendV5UpgradeWarnings } from '../../../deprecated/warnings';

jest.spyOn(console, 'warn').mockImplementation();

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
    afterEach(() => {
      jest.clearAllMocks();
    });

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

    it('has dev warning when columns', () => {
      const element = mount(<Footer.List columns />);
      expect(console.warn).toHaveBeenCalledTimes(1);
      expect((console.warn as jest.Mock).mock.calls[0][0]).toBe(
        NHSUKFrontendV5UpgradeWarnings.FooterColumns,
      );
      element.unmount();
    });

    it('no dev warning when columns is false', () => {
      const element = mount(<Footer.List />);
      expect(console.warn).not.toHaveBeenCalled();
      element.unmount();
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
