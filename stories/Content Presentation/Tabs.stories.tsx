import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Tabs } from '#components/content-presentation/tabs/index.js';

const meta: Meta<typeof Tabs> = {
  title: 'Content Presentation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the tabs component and when to use it, visit the [design system in the
          NHS digital service manual](https://service-manual.nhs.uk/design-system/components/tabs)
          for guidance, examples and options.
        </Markdown>
      ),
    },
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
