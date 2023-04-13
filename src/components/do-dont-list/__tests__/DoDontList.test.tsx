import React from 'react';
import { shallow, mount } from 'enzyme';
import DoDontList from '..';
import { NHSUKFrontendV5UpgradeWarnings } from '../../../deprecated/warnings';

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

    it("dont item includes 'do not' by default", () => {
      const dontList = mount(
        <DoDontList listType="dont">
          <DoDontList.Item>do something bad</DoDontList.Item>
        </DoDontList>,
      );
      expect(dontList.find('.nhsuk-list--cross').text()).toEqual('do not do something bad');
      dontList.unmount();
    });

    it('items render custom prefix text', () => {
      const doList = mount(
        <DoDontList listType="do">
          <DoDontList.Item prefixText="do ">something good 1</DoDontList.Item>
          <DoDontList.Item>something good 2</DoDontList.Item>
          <DoDontList.Item prefixText={<span>also do </span>}>something good 3</DoDontList.Item>
          <DoDontList.Item prefixText={undefined}>something good 4</DoDontList.Item>
          <DoDontList.Item prefixText={null}>something good 5</DoDontList.Item>
        </DoDontList>,
      );
      const dontList = mount(
        <DoDontList listType="dont">
          <DoDontList.Item prefixText="do not ">do something bad 1</DoDontList.Item>
          <DoDontList.Item>do something bad 2</DoDontList.Item>
          <DoDontList.Item prefixText={<span>don&apos;t do </span>}>
            something bad 3
          </DoDontList.Item>
          <DoDontList.Item prefixText={undefined}>something bad 4</DoDontList.Item>
          <DoDontList.Item prefixText={null}>something bad 5</DoDontList.Item>
        </DoDontList>,
      );
      expect(doList.find('.nhsuk-list--tick').childAt(0).text()).toBe('do something good 1');
      expect(doList.find('.nhsuk-list--tick').childAt(1).text()).toBe('something good 2');
      expect(doList.find('.nhsuk-list--tick').childAt(2).text()).toBe('also do something good 3');
      expect(doList.find('.nhsuk-list--tick').childAt(3).text()).toBe('something good 4');
      expect(doList.find('.nhsuk-list--tick').childAt(4).text()).toBe('something good 5');

      expect(dontList.find('.nhsuk-list--cross').childAt(0).text()).toBe(
        'do not do something bad 1',
      );
      expect(dontList.find('.nhsuk-list--cross').childAt(1).text()).toBe(
        'do not do something bad 2',
      );
      expect(dontList.find('.nhsuk-list--cross').childAt(2).text()).toBe(
        "don't do something bad 3",
      );
      expect(dontList.find('.nhsuk-list--cross').childAt(3).text()).toBe('do not something bad 4');
      expect(dontList.find('.nhsuk-list--cross').childAt(4).text()).toBe('something bad 5');

      doList.unmount();
      dontList.unmount();
    });
  });
});
