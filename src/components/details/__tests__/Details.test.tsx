import React from 'react';
import Details from '..';
import { shallow } from 'enzyme';

describe('Details', () => {
  it('matches snapshot', () => {
    const standardDetails = shallow(<Details />);
    const expanderDetails = shallow(<Details expander />);
    expect(standardDetails).toMatchSnapshot('StandardDetails');
    expect(expanderDetails).toMatchSnapshot('ExpanderDetails');
    standardDetails.unmount();
    expanderDetails.unmount();
  });

  it('adds expander classes', () => {
    const expander = shallow(<Details expander></Details>);
    expect(expander.hasClass('nhsuk-expander')).toBeTruthy();
    expander.unmount();
  });

  describe('Details.Summary', () => {
    it('matches snapshot', () => {
      const element = shallow(<Details.Summary>Content</Details.Summary>);
      expect(element).toMatchSnapshot('Details.Summary');
      expect(element.type()).toEqual('summary');
      expect(
        element.containsMatchingElement(
          <span className="nhsuk-details__summary-text">Content</span>,
        ),
      ).toBeTruthy();
      element.unmount();
    });
  });

  describe('Details.Text', () => {
    it('matches snapshot', () => {
      const element = shallow(<Details.Text>Text</Details.Text>);
      expect(element).toMatchSnapshot('Details.Text');
      expect(element.type()).toEqual('div');
      element.unmount();
    });
  });

  describe('Details.ExpanderGroup', () => {
    it('matches snapshot', () => {
      const element = shallow(<Details.ExpanderGroup />);
      expect(element).toMatchSnapshot('Details.ExpanderGroup');
      expect(element.type()).toEqual('div');
      element.unmount();
    });
  });
});
