import { type Meta, type StoryObj } from '@storybook/react-vite';
import { ErrorMessage } from '#components/form-elements/error-message/index.js';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/error-message" target="_blank" rel="noopener noreferrer">here</a>.
 */
const meta: Meta<typeof ErrorMessage> = {
  title: 'Form Elements/ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'Enter your full name',
  },
  argTypes: {
    visuallyHiddenText: {
      control: 'text',
      table: {
        defaultValue: { summary: 'Error' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Standard: Story = {};

export const CustomVisuallyHiddenText: Story = {
  args: { visuallyHiddenText: 'Custom' },
  argTypes: { visuallyHiddenText: { control: false } },
};

export const EmptyVisuallyHiddenText: Story = {
  args: { visuallyHiddenText: '' },
  argTypes: { visuallyHiddenText: { control: false } },
};
