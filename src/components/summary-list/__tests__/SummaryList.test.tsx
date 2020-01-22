import React from 'react';
import SummaryList from '..';
import { shallow } from 'enzyme';

describe('SummaryList', () => {
  it('matches snapshot', () => {
    const element = shallow(<SummaryList />);
    expect(element).toMatchSnapshot('SummaryList');
    element.unmount();
  });

  it('adds css classes when noBorder prop supplied', () => {
    const element = shallow(<SummaryList noBorder></SummaryList>);
    expect(element.hasClass('nhsuk-summary-list--no-border')).toBeTruthy();
    element.unmount();
  });

  describe('SummaryList.Row', () => {
    it('matches snapshot', () => {
      const element = shallow(<SummaryList.Row>Row</SummaryList.Row>);
      expect(element.text()).toBe('Row');
      expect(element).toMatchSnapshot();
      expect(element.type()).toBe('div');
      element.unmount();
    });
  });

  describe('SummaryList.Key', () => {
    it('matches snapshot', () => {
      const element = shallow(<SummaryList.Key>Key</SummaryList.Key>);
      expect(element.text()).toBe('Key');
      expect(element).toMatchSnapshot();
      expect(element.type()).toBe('dt');
      element.unmount();
    });
  });

  describe('SummaryList.Value', () => {
    it('matches snapshot', () => {
      const element = shallow(<SummaryList.Value>Value</SummaryList.Value>);
      expect(element.text()).toBe('Value');
      expect(element).toMatchSnapshot();
      expect(element.type()).toBe('dd');
      element.unmount();
    });
  });

  describe('SummaryList.Actions', () => {
    it('matches snapshot', () => {
      const element = shallow(<SummaryList.Actions>Actions</SummaryList.Actions>);
      expect(element.text()).toBe('Actions');
      expect(element).toMatchSnapshot();
      expect(element.type()).toBe('dd');
      element.unmount();
    });
  });
});
