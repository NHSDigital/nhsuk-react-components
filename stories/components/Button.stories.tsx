import type { Story } from '@storybook/react';
import React from 'react';
import { Button } from '../../src';

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = { children: 'Primary' };

export const Secondary: Story = Primary.bind({});
Secondary.args = { children: 'Secondary', secondary: true };

export const Reverse: Story = Primary.bind({});
Reverse.args = { children: 'Reverse', reverse: true };

export const Disabled = Primary.bind({});
Disabled.args = { children: 'Disabled', disabled: true };

export const LinkButton = Primary.bind({});
LinkButton.args = { children: 'As a Link', href: '/' };

export const ForceButton = Primary.bind({});
ForceButton.args = { children: 'As a Button', as: 'button' };
ForceButton.storyName = 'Button Element (Forced)';

export const ForceAnchor = Primary.bind({});
ForceAnchor.args = { children: 'As an Anchor', as: 'a' };
ForceAnchor.storyName = 'Anchor Element (Forced)';

export default {
  title: 'Components/Button',
  component: Button,
};
