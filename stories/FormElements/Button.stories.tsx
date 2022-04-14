import { Story } from '@storybook/react';
import React from 'react';
import { Button } from '../../src';

export const PrimaryButton: Story = (args) => <Button {...args}>Save and continue</Button>;

export const SecondaryButton: Story = (args) => <Button {...args}>Find my location</Button>;
SecondaryButton.args = { secondary: true };

export const ReverseButton: Story = (args) => <Button {...args}>Save and continue</Button>;
ReverseButton.args = { reverse: true };

export const DisabledButton: Story = (args) => <Button {...args}>Disabled</Button>;
DisabledButton.args = { disabled: true };

export const CustomElementButton: Story = (args) => <Button {...args}>As a Link</Button>;
CustomElementButton.args = { asElement: 'a', href: '/' };

export default {
  title: 'Form Elements/Buttons',
  component: Button,
};
