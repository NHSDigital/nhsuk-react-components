import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Tabs } from '#components/content-presentation/tabs/index.js';

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
  parameters: {
    width: 'full',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: 'Tabs default',
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Title>Contents</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem id="past-day">Past day</Tabs.ListItem>
        <Tabs.ListItem id="past-week">Past week</Tabs.ListItem>
        <Tabs.ListItem id="past-month">Past month</Tabs.ListItem>
      </Tabs.List>

      <Tabs.Contents id="past-day">
        <p>Past day contents go here</p>
      </Tabs.Contents>

      <Tabs.Contents id="past-week">
        <p>Past week contents go here</p>
      </Tabs.Contents>

      <Tabs.Contents id="past-month">
        <p>Past month contents go here</p>
      </Tabs.Contents>
    </Tabs>
  ),
};
