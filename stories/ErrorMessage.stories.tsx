import { ErrorMessage } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'Error message about full name goes here',
  },
};
export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Standard: Story = {};
export const NoVisuallyHiddenText: Story = { args: { visuallyHiddenText: false } };
export const CustomVisuallyHiddenText: Story = { args: { visuallyHiddenText: 'Custom Text' } };
