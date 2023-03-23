import { Button } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Primary' } };
export const Secondary: Story = { args: { secondary: true, children: 'Secondary' } };
export const Reverse: Story = { args: { reverse: true, children: 'Reverse' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
export const LinkButton: Story = { args: { href: '/', children: 'As a Link' } };
export const ForceButton: Story = { args: { as: 'button', children: 'As a Button' } };
export const ForceAnchor: Story = { args: { as: 'a', children: 'As an Anchor' } };
