import React from 'react';
import { shallow, mount } from 'enzyme';
import DoDontList from '..';

describe('DoDontList', () => {
  it('matches snapshot', () => {
    const doElement = shallow(<DoDontList listType="do" />);
    const dontElement = shallow(<DoDontList listType="dont" />);
    expect(doElement).toMatchSnapshot('DoDontList-Do');
    expect(dontElement).toMatchSnapshot('DoDontList-Dont');
    doElement.unmount();
    dontElement.unmount();
  });

  it('adds the correct header', () => {
    const doElement = mount(<DoDontList listType="do" />);
    const dontElement = mount(<DoDontList listType="dont" />);
    expect(doElement.find('h3.nhsuk-do-dont-list__label').text()).toEqual('Do');
    expect(dontElement.find('h3.nhsuk-do-dont-list__label').text()).toEqual("Don't");
    doElement.unmount();
    dontElement.unmount();
  });

  it('adds the correct classes', () => {
    const doElement = mount(<DoDontList listType="do" />);
    const dontElement = mount(<DoDontList listType="dont" />);

    expect(doElement.find('ul').hasClass('nhsuk-list--tick')).toBeTruthy();
    expect(doElement.find('ul').hasClass('nhsuk-list--cross')).toBeFalsy();

    expect(dontElement.find('ul').hasClass('nhsuk-list--tick')).toBeFalsy();
    expect(dontElement.find('ul').hasClass('nhsuk-list--cross')).toBeTruthy();

    doElement.unmount();
    dontElement.unmount();
  });

  describe('DoDontList.Item', () => {
    it('matches snapshot', () => {
      const element = shallow(<DoDontList.Item>Text</DoDontList.Item>);
      expect(element).toMatchSnapshot('DoDontList.Item');
      element.unmount();
    });

    it('inherits type from context', () => {
      const doList = mount(
        <DoDontList listType="do">
          <DoDontList.Item>Do</DoDontList.Item>
        </DoDontList>,
      );
      const dontList = mount(
        <DoDontList listType="dont">
          <DoDontList.Item>Don&apos;t</DoDontList.Item>
        </DoDontList>,
      );

      expect(doList.find('.nhsuk-icon__tick').exists()).toBeTruthy();
      expect(doList.find('.nhsuk-icon__cross').exists()).toBeFalsy();

      expect(dontList.find('.nhsuk-icon__tick').exists()).toBeFalsy();
      expect(dontList.find('.nhsuk-icon__cross').exists()).toBeTruthy();

      doList.unmount();
      dontList.unmount();
    });

    it("dont item includes 'do not'", () => {
      const dontList = mount(
        <DoDontList listType="dont">
          <DoDontList.Item>do something bad</DoDontList.Item>
        </DoDontList>,
      );
      expect(dontList.find('.nhsuk-list--cross').text()).toEqual('do not do something bad');
      dontList.unmount();
    });
  });
});
