import React from 'react';
import { mount, shallow } from 'enzyme';
import ErrorSummary from '..';

describe('ErrorSummary', () => {
  it('matches snapshot', () => {
    const element = shallow(<ErrorSummary />);
    expect(element).toMatchSnapshot('ErrorSummary');
    element.unmount();
  });

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>();
    const element = mount(<ErrorSummary ref={ref}/>);
    expect(ref.current).not.toBeNull();
    element.unmount();
  });

  describe('ErrorSummary.Title', () => {
    it('matches snapshot', () => {
      const element = shallow(<ErrorSummary.Title>Title</ErrorSummary.Title>);
      expect(element.text()).toBe('Title');
      expect(element).toMatchSnapshot('ErrorSummary.Title');
      element.unmount();
    });
  });

  describe('ErrorSummary.Body', () => {
    it('matches snapshot', () => {
      const element = shallow(<ErrorSummary.Body>Body</ErrorSummary.Body>);
      expect(element.text()).toBe('Body');
      expect(element).toMatchSnapshot('ErrorSummary.Body');
      element.unmount();
    });
  });

  describe('ErrorSummary.List', () => {
    it('matches snapshot', () => {
      const element = shallow(<ErrorSummary.List>List</ErrorSummary.List>);
      expect(element.text()).toBe('List');
      expect(element).toMatchSnapshot('ErrorSummary.List');
      element.unmount();
    });
  });

  describe('ErrorSummary.ListItem', () => {
    it('matches snapshot', () => {
      const element = shallow(<ErrorSummary.Item>ListItem</ErrorSummary.Item>);
      expect(element.find('a').text()).toBe('ListItem');
      expect(element).toMatchSnapshot('ErrorSummary.ListItem');
      element.unmount();
    });
  });
});
