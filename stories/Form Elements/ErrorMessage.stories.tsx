import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ErrorMessage } from '#components/form-elements/error-message/index.js';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Form Elements/Error message',
  component: ErrorMessage,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the error message component and when to use it, visit the [design
          system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/error-message) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
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

export const Default: Story = {
  name: 'Error message default',
};

export const CustomVisuallyHiddenText: Story = {
  name: 'Error message with custom visually hidden text',
  args: { visuallyHiddenText: 'Custom' },
  argTypes: { visuallyHiddenText: { control: false } },
};

export const EmptyVisuallyHiddenText: Story = {
  name: 'Error message with empty visually hidden text',
  args: { visuallyHiddenText: '' },
  argTypes: { visuallyHiddenText: { control: false } },
};
