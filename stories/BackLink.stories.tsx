import { BackLink } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackLink> = {
  title: 'Components/BackLink',
  component: BackLink,
  args: { children: 'Link', href: '/', asElement: 'a' },
};
export default meta;
type Story = StoryObj<typeof BackLink>;

export const StandardLink: Story = {};
export const OpenInNewTabLink: Story = {
  args: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};
