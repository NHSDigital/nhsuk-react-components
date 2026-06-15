import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ActionLink } from '#components/navigation/action-link/index.js';

const meta: Meta<typeof ActionLink> = {
  title: 'Navigation/Action link',
  component: ActionLink,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the action link component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/action-link) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
  render: (args) => <ActionLink {...args}>Find your nearest A&E</ActionLink>,
};

export default meta;
type Story = StoryObj<typeof ActionLink>;

export const Default: Story = {
  name: 'Action link default',
  args: {
    href: '#',
  },
};

export const Reverse: Story = {
  name: 'Action link reverse',
  args: {
    href: '#',
    reverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
