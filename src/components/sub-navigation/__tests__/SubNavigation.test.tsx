import React from 'react';
import {render} from '@testing-library/react';
import SubNavigation from '../SubNavigation';

describe('SubNavigation', () => {
  it('matches snapshot', () => {
    const component = render(<SubNavigation />);
    expect(component.container).toMatchSnapshot();
  });

  it('should have correct classes applied', () => {
    const component = render(<SubNavigation />);
    const unorderedList = component.container.querySelector('.nhsuk-sub-navigation__list');

    expect(component.container.querySelector('.nhsuk-sub-navigation')).toBeTruthy();
    expect(unorderedList).toBeTruthy();

  });

  describe('SubNavigationItem', () => {
    it('matches snapshot', () => {
      const component = render(<SubNavigation.Item href="#">Hello world</SubNavigation.Item>);
      expect(component.container).toMatchSnapshot();
    });

    it('should have the correct classes applied', () => {
      const component = render(<SubNavigation.Item href="#">Hello world</SubNavigation.Item>);

      expect(component.container.querySelector('.nhsuk-sub-navigation__item')).toBeTruthy();

    });

    it('passes inner text correctly', () => {
      const component = render(
        <SubNavigation.Item href="https://nhs.uk">Hello world</SubNavigation.Item>,
      );
      expect(component.container.textContent).toBe('Hello world');
    });
  });
});
