import React from 'react';
import { render } from '@testing-library/react';
import Tabs from '../Tabs';

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
});
