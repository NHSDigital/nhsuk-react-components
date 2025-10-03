import { type Meta, type StoryObj } from '@storybook/react';
import { ActionLink } from '#components';

const meta: Meta<typeof ActionLink> = {
  title: 'Navigation/ActionLink',
  component: ActionLink,
  args: { children: 'Link', asElement: 'a', href: '#' },
};
export default meta;
type Story = StoryObj<typeof ActionLink>;

export const StandardLink: Story = {};

export const OpenLinkInNewTab: Story = {
  args: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
