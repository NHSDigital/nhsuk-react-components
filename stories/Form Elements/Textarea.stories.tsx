import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Textarea } from '#components/form-elements/textarea/index.js';

const meta: Meta<typeof Textarea> = {
  title: 'Form Elements/Textarea',
  component: Textarea,
  args: {
    label: 'Can you provide more detail?',
    labelProps: { isPageHeading: true, size: 'l' },
    id: 'example',
    name: 'example',
    rows: 5,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  name: 'Textarea default',
};

export const WithHint: Story = {
  name: 'Textarea with hint',
  args: {
    hint: 'Do not include personal information, like your name, date of birth or NHS number',
  },
};

export const WithError: Story = {
  name: 'Textarea with error message',
  args: {
    error: 'You must provide an explanation',
  },
};

export const WithErrorAndHint: Story = {
  name: 'Textarea with error and hint text',
  args: {
    error: 'You must provide an explanation',
    hint: 'Do not include personal information, like your name, date of birth or NHS number',
  },
};

export const WithAutoCompleteAttribute: Story = {
  name: 'Textarea with autocomplete attribute',
  args: {
    autoComplete: 'street-address',
  },
};
