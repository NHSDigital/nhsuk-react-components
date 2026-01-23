import { type Meta, type StoryObj } from '@storybook/react-vite';

import { BackLink } from '#components/navigation/back-link/index.js';

const meta: Meta<typeof BackLink> = {
  title: 'Navigation/BackLink',
  component: BackLink,
  render: (args) => <BackLink {...args} />,
};
export default meta;
type Story = StoryObj<typeof BackLink>;

export const Standard: Story = {
  name: 'Back link default',
  args: {
    href: '#',
  },
};

export const WithVisuallyHiddenText: Story = {
  name: 'Back link with visually hidden text',
  args: {
    href: '#',
    visuallyHiddenText: 'Back to',
    children: 'Search results',
  },
};

export const Button: Story = {
  name: 'Back link as a button',
  args: {
    asElement: 'button',
  },
};

export const Reverse: Story = {
  name: 'Back link reverse',
  args: {
    href: '#',
    reverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
