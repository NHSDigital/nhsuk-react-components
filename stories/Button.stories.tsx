import React from 'react';
import { Button as LibButton } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LibButton> = {
  title: 'Components/Button',
  component: LibButton,
  render: (args) => <Button {...args} />,
};

/**
 * There might be a better way to do this, but this is the only way I could get storybook not to use the name of the default exported component
 * which in this case is <ButtonWrapper> and not <Button>
 */
function Button(props) {
  return <LibButton {...props} />;
}

export default meta;
type Story = StoryObj<typeof LibButton>;

export const Primary: Story = {
  args: { children: 'Primary' },
  render: (args) => <Button {...args} />,
};
export const Secondary: Story = { args: { secondary: true, children: 'Secondary' } };
export const Reverse: Story = { args: { reverse: true, children: 'Reverse' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
export const LinkButton: Story = { args: { href: '/', children: 'As a Link' } };
export const ForceButton: Story = { args: { as: 'button', children: 'As a Button' } };
export const ForceAnchor: Story = { args: { as: 'a', children: 'As an Anchor' } };
