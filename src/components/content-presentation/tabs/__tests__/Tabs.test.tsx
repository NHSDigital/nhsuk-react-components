import { render } from '@testing-library/react';
import { createRef } from 'react';

import { Tabs, type TabsTitleProps } from '..';

import { renderClient, renderServer } from '#util/components';

describe('Tabs', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
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
      { moduleName: 'nhsuk-tabs' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
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
      { moduleName: 'nhsuk-tabs' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-tabs',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = await renderClient(
      <Tabs ref={ref}>
        <Tabs.List>
          <Tabs.ListItem id="tab-one">Tab One</Tabs.ListItem>
          <Tabs.ListItem id="tab-two">Tab Two</Tabs.ListItem>
        </Tabs.List>
      </Tabs>,
      { moduleName: 'nhsuk-tabs' },
    );

    const tabsEl = container.querySelector('div');

    expect(ref.current).toBe(tabsEl);
    expect(ref.current).toHaveClass('nhsuk-tabs');
  });

  it('switches visibility of tabs when clicked', async () => {
    const { container } = await renderClient(
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
      { moduleName: 'nhsuk-tabs' },
    );

    const firstTabLink = container.querySelector<HTMLAnchorElement>('#tab_tab-one');
    const secondTabLink = container.querySelector<HTMLAnchorElement>('#tab_tab-two');

    expect(firstTabLink?.parentElement).toHaveClass('nhsuk-tabs__list-item--selected');
    expect(secondTabLink?.parentElement).not.toHaveClass('nhsuk-tabs__list-item--selected');

    secondTabLink?.click();

    expect(firstTabLink?.parentElement).not.toHaveClass('nhsuk-tabs__list-item--selected');
    expect(secondTabLink?.parentElement).toHaveClass('nhsuk-tabs__list-item--selected');
  });

  describe('Tabs.Title', () => {
    it.each<TabsTitleProps>([
      { headingLevel: 'h1' },
      { headingLevel: 'h2' },
      { headingLevel: 'h3' },
      { headingLevel: 'h4' },
    ])('renders with custom heading level $headingLevel', (props) => {
      const { container } = render(<Tabs.Title {...props}>Test title</Tabs.Title>);

      const title = container.querySelector('.nhsuk-tabs__title');

      expect(title).toHaveProperty('tagName', props.headingLevel?.toUpperCase());
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

      const tabsItemEl = container.querySelector('.nhsuk-tabs__list-item a');
      const tabsItemContentsEl = container.querySelector<HTMLElement>('#list-item-contents');

      expect(tabsItemEl).toHaveAttribute('href', '#test-id');
      expect(tabsItemEl).toContainElement(tabsItemContentsEl);
    });
  });

  describe('Tab.Contents', () => {
    it('renders expected children', () => {
      const { container } = render(
        <Tabs.Contents id="test-contents">
          <div id="tab-contents" />
        </Tabs.Contents>,
      );

      const tabsPanelEl = container.querySelector('.nhsuk-tabs__panel');
      const tabsPanelContentsEl = container.querySelector<HTMLElement>('#tab-contents');

      expect(tabsPanelEl).toHaveAttribute('id', 'test-contents');
      expect(tabsPanelEl).toContainElement(tabsPanelContentsEl);
    });
  });
});
