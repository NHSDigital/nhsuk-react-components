import React, { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tabs, { TabTitleProps } from '../Tabs';

describe('Tabs', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Title>Contents</Tabs.Title>
        <Tabs.List>
          <Tabs.ListItem id="past-day">Past day</Tabs.ListItem>
          <Tabs.ListItem id="past-week">Past week</Tabs.ListItem>
          <Tabs.ListItem id="past-month">Past month</Tabs.ListItem>
        </Tabs.List>

        <Tabs.Contents id="past-day">
          <div>Past day contents go here</div>
        </Tabs.Contents>

        <Tabs.Contents id="past-week">
          <div>Past week contents go here</div>
        </Tabs.Contents>

        <Tabs.Contents id="past-month">
          <div>Past month contents go here</div>
        </Tabs.Contents>
      </Tabs>,
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(
      <Tabs ref={ref}>
        <Tabs.List>
          <Tabs.ListItem id="tab-one">Tab One</Tabs.ListItem>
          <Tabs.ListItem id="tab-two">Tab Two</Tabs.ListItem>
        </Tabs.List>
      </Tabs>,
    );

    const tabsEl = container.querySelector('div');

    expect(ref.current).toBe(tabsEl);
    expect(ref.current).toHaveClass('nhsuk-tabs');
  });

  it('switches visibility of tabs when clicked', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Title>Contents</Tabs.Title>
        <Tabs.List>
          <Tabs.ListItem id="tab-one">Tab One</Tabs.ListItem>
          <Tabs.ListItem id="tab-two">Tab Two</Tabs.ListItem>
        </Tabs.List>

        <Tabs.Contents id="tab-one">
          <div>Tab one contents go here</div>
        </Tabs.Contents>

        <Tabs.Contents id="tab-two">
          <div>Tab two contents go here</div>
        </Tabs.Contents>
      </Tabs>,
    );

    const firstTabLink = container.querySelector('#tab_tab-one');
    const secondTabLink = container.querySelector('#tab_tab-two');

    expect(
      firstTabLink?.parentElement?.classList.contains('nhsuk-tabs__list-item--selected'),
    ).toEqual(true);
    expect(
      secondTabLink?.parentElement?.classList.contains('nhsuk-tabs__list-item--selected'),
    ).toEqual(false);

    fireEvent.click(secondTabLink!);

    expect(
      firstTabLink?.parentElement?.classList.contains('nhsuk-tabs__list-item--selected'),
    ).toEqual(false);
    expect(
      secondTabLink?.parentElement?.classList.contains('nhsuk-tabs__list-item--selected'),
    ).toEqual(true);
  });

  describe('Tabs.Title', () => {
    it.each<TabTitleProps | undefined>([
      undefined,
      { headingLevel: 'h1' },
      { headingLevel: 'h2' },
      { headingLevel: 'h3' },
      { headingLevel: 'h4' },
    ])('renders heading level $headingLevel if specified', (props) => {
      const { container } = render(<Tabs.Title {...props}>Test title</Tabs.Title>);

      const title = container.querySelector('.nhsuk-tabs__title');

      expect(title).toHaveProperty('tagName', props?.headingLevel?.toUpperCase() ?? 'H2');
    });
  });

  describe('Tabs.List', () => {
    it('renders expected children', () => {
      const { container } = render(
        <Tabs.List>
          <div id="list-contents" />
        </Tabs.List>,
      );

      const listElement = container.querySelector('.nhsuk-tabs__list');

      expect(listElement?.querySelector('#list-contents')).toBeTruthy();
    });
  });

  describe('Tabs.ListItem', () => {
    it('sets the href to be the passed in id prop', () => {
      const { container } = render(
        <Tabs.ListItem id="test-id">
          <div id="list-item-contents" />
        </Tabs.ListItem>,
      );

      expect(container.querySelector('.nhsuk-tabs__tab')?.getAttribute('href')).toBe('#test-id');
    });

    it('renders expected children', () => {
      const { container } = render(
        <Tabs.ListItem id="test-id">
          <div id="list-item-contents" />
        </Tabs.ListItem>,
      );

      const tabElement = container.querySelector('.nhsuk-tabs__tab');

      expect(tabElement?.querySelector('#list-item-contents')).toBeTruthy();
    });
  });

  describe('Tab.Contents', () => {
    it('renders expected children', () => {
      const { container } = render(
        <Tabs.Contents id="test-contents">
          <div id="tab-contents" />
        </Tabs.Contents>,
      );

      const tabElement = container.querySelector('#test-contents');

      expect(tabElement?.querySelector('#tab-contents')).toBeTruthy();
    });
  });
});
