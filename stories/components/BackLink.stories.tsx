import type { Story } from '@storybook/react';
import React from 'react';
import { BackLink } from '../../src';

export const StandardLink: Story = (args) => <BackLink {...args} />;
StandardLink.args = { href: '/', children: 'Link' };

export const OpenInNewTabLink: Story = (args) => <BackLink {...args} />;
OpenInNewTabLink.args = {
  target: '_blank',
  rel: 'noopener noreferrer',
  href: '/',
  children: 'Link',
};

export default {
  title: 'Components/BackLink',
  component: BackLink,
};
