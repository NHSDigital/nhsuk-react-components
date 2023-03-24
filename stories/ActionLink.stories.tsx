import { ActionLink } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ActionLink> = {
  title: 'Components/ActionLink',
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
