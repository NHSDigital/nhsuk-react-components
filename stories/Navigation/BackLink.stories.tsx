import { BackLink } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackLink> = {
  title: 'Navigation/BackLink',
  component: BackLink,
  args: { children: 'Go back', href: '/', asElement: 'a' },
};
export default meta;
type Story = StoryObj<typeof BackLink>;

export const StandardLink: Story = {};

export const BackLinkAsAButton: Story = {
  args: {
    asElement: 'button',
    href: false
  },
};
