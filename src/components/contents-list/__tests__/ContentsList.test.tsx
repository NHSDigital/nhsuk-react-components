import React from 'react';
import ContentsList from '..';
import { shallow } from 'enzyme';

describe('ContentsList', () => {
  it('matches snapshot', () => {
    const element = shallow(<ContentsList />);
    expect(element).toMatchSnapshot('ContentsList');
    element.unmount();
  });

  it('renders default hidden text', () => {
    const element = shallow(<ContentsList />);
    expect(element.find('.nhsuk-u-visually-hidden').text()).toEqual('Contents');
    element.unmount();
  });

  it('renders custom hidden text', () => {
    const element = shallow(<ContentsList visuallyHiddenText="Custom" />);
    expect(element.find('.nhsuk-u-visually-hidden').text()).toEqual('Custom');
    element.unmount();
  });

  it('disables hidden text', () => {
    const element = shallow(<ContentsList visuallyHiddenText={false}></ContentsList>);
    expect(element.find('.nhsuk-u-visually-hidden').exists()).toBeFalsy();
    element.unmount();
  });

  describe('ContentsList.Item', () => {
    it('matches snapshot', () => {
      const element = shallow(<ContentsList.Item>Content</ContentsList.Item>);
      expect(element).toMatchSnapshot('ContentsList.Item');
      element.unmount();
    });

    it('renders as span when current', () => {
      const element = shallow(<ContentsList.Item current>Content</ContentsList.Item>);
      expect(
        element.containsMatchingElement(
          <span className="nhsuk-contents-list__current">Content</span>,
        ),
      ).toBeTruthy();
      element.unmount();
    });

    it('normally renders as anchor', () => {
      const element = shallow(<ContentsList.Item>Content</ContentsList.Item>);
      expect(
        element.containsMatchingElement(<a className="nhsuk-contents-list__link">Content</a>),
      ).toBeTruthy();
      element.unmount();
    });
  });
});
