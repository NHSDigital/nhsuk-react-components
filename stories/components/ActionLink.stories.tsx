import type { Story } from '@storybook/react';
import React from 'react';
import { ActionLink } from '../../src';

export const StandardLink: Story = (args) => <ActionLink {...args} />;
StandardLink.args = { href: '/', children: 'Link' };

export const OpenInNewTabLink: Story = (args) => <ActionLink {...args} />;
OpenInNewTabLink.args = {
  target: '_blank',
  rel: 'noopener noreferrer',
  href: '/',
  children: 'Link',
};

export default {
  title: 'Components/ActionLink',
  component: ActionLink,
};
