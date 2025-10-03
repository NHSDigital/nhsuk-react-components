import { type Meta, type StoryObj } from '@storybook/react';
import { Tabs } from 'nhsuk-react-components';

/**
 * The tabs component lets users navigate between related sections of content, displaying 1 section at a time.
 *
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/tabs" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * Further information about this component can be found in the <a href='https://service-manual.nhs.uk/design-system/components/tabs'>NHS digital service manual.</a>
 */

const meta: Meta<typeof Tabs> = {
  title: 'Content Presentation/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Standard: Story = {
  render: () => (
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
    </Tabs>
  ),
};

/**
 * There is a heading available by using the `Tabs.Title` component.
 * This heading is hidden on larger screens, and is useful for accessibility concerns and screen readers.
 * It also displays if the user has JavaScript disabled.
 */
export const DifferentAccessibleHeading: Story = {
  render: () => (
    <Tabs>
      <Tabs.Title headingLevel="h1">Tabs title</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem id="past-day-2">Past day</Tabs.ListItem>
        <Tabs.ListItem id="past-week-2">Past week</Tabs.ListItem>
        <Tabs.ListItem id="past-month-2">Past month</Tabs.ListItem>
      </Tabs.List>

      <Tabs.Contents id="past-day-2">
        <div>Past day contents go here</div>
      </Tabs.Contents>

      <Tabs.Contents id="past-week-2">
        <div>Past week contents go here</div>
      </Tabs.Contents>

      <Tabs.Contents id="past-month-2">
        <div>Past month contents go here</div>
      </Tabs.Contents>
    </Tabs>
  ),
};
