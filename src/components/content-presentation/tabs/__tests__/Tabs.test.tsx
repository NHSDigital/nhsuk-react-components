import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tabs from '../Tabs';
import { HeadingLevelType } from '@util/HeadingLevel';

describe('The tabs component', () => {
  it('Matches the snapshot', () => {
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

  it('Switches the visibility of tabs when clicked', () => {
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

  describe('The tabs title', () => {
    it.each`
      headingLevel
      ${undefined}
      ${'H1'}
      ${'H2'}
      ${'H3'}
      ${'H4'}
    `(
      'Renders the chosen heading level $headingLevel if specified',
      ({ headingLevel }: { headingLevel: HeadingLevelType }) => {
        const { container } = render(
          <Tabs.Title headingLevel={headingLevel}>Test title</Tabs.Title>,
        );

        const title = container.querySelector('.nhsuk-tabs__title');

        expect(title?.nodeName).toEqual(headingLevel ?? 'H2');
      },
    );
  });

  describe('The tab list', () => {
    it('Renders the expected children', () => {
      const { container } = render(
        <Tabs.List>
          <div id="list-contents" />
        </Tabs.List>,
      );

      const listElement = container.querySelector('.nhsuk-tabs__list');

      expect(listElement?.querySelector('#list-contents')).toBeTruthy();
    });
  });

  describe('The tab list item', () => {
    it('Sets the href to be the passed in id prop', () => {
      const { container } = render(
        <Tabs.ListItem id="test-id">
          <div id="list-item-contents" />
        </Tabs.ListItem>,
      );

      expect(container.querySelector('.nhsuk-tabs__tab')?.getAttribute('href')).toBe('#test-id');
    });

    it('Renders the expected children', () => {
      const { container } = render(
        <Tabs.ListItem id="test-id">
          <div id="list-item-contents" />
        </Tabs.ListItem>,
      );

      const tabElement = container.querySelector('.nhsuk-tabs__tab');

      expect(tabElement?.querySelector('#list-item-contents')).toBeTruthy();
    });
  });

  describe('The tab contents', () => {
    it('Renders the expected children', () => {
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
