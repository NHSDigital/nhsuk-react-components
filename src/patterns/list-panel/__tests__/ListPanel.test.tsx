import React from 'react';
import { mount, shallow } from 'enzyme';
import ListPanel from '..';

describe('ListPanel', () => {
  it('matches snapshot', () => {
    const component = mount(<ListPanel />);
    expect(component.find("div.nhsuk-card").hasClass("nhsuk-card--feature")).toBeTruthy()
    expect(component.find("div.nhsuk-card__content").hasClass("nhsuk-card__content--feature")).toBeTruthy()
    expect(component).toMatchSnapshot('ListPanel');
    component.unmount();
  });

  describe('ListPanel.Heading', () => {
    it('matches snapshot', () => {
      const component = mount(<ListPanel.Heading href="/somewhere" />);
      expect(component).toMatchSnapshot('ListPanel.Heading');
      component.unmount();
    });

    it('renders with correct classNames', () => {
      const component = shallow(<ListPanel.Heading className="custom" />);
      expect(component.hasClass('nhsuk-u-font-size-24')).toBeTruthy();
      expect(component.hasClass('custom')).toBeTruthy();
      component.unmount();
    });
  })

  describe("ListPanel.List", () => {
    it("matches snapshot", () => {
      const component = mount(<ListPanel.List />);
      expect(component).toMatchSnapshot("ListPanel.List");
      component.unmount();
    })

    it("renders with correct classNames", () => {
      const component = shallow(<ListPanel.List className="custom" />);
      expect(component.hasClass("nhsuk-list--border")).toBeTruthy();
      expect(component.hasClass("custom")).toBeTruthy();
      component.unmount();
    })
  })

  describe("ListPanel.BackToTop", () => {
    it("matches snapshot", () => {
      const component = mount(<ListPanel.BackToTop />);
      expect(component).toMatchSnapshot("ListPanel.BackToTop");
      component.unmount();
    })

    it("renders with correct classNames", () => {
      const component = mount(<ListPanel.BackToTop className="custom" href="/top" />);
      
      const link = component.find("a.nhsuk-back-to-top__link")
      expect(link.exists()).toBeTruthy()
      expect(link.hasClass("custom")).toBeTruthy()
      expect(link.prop("href")).toEqual("/top")
      
      component.unmount();
    })

    it("accepts a custom component", () => {
      const component = mount(<ListPanel.BackToTop asElement="span" />);

      const link = component.find(".nhsuk-back-to-top__link")
      expect(link.exists()).toBeTruthy()
      expect(link.type()).toEqual("span")

      component.unmount();
    })
  })
});
