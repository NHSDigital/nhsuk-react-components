import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ActionLink } from '#components/navigation/action-link/index.js';

const meta: Meta<typeof ActionLink> = {
  title: 'Navigation/ActionLink',
  component: ActionLink,
  render: (args) => <ActionLink {...args}>Find your nearest A&E</ActionLink>,
};

export default meta;
type Story = StoryObj<typeof ActionLink>;

export const Standard: Story = {
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
