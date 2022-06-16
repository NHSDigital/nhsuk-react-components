import { Story } from '@storybook/react';
import React from 'react';
import { Input } from '../../src';

export const Example: Story = (args) => <Input {...args} />;
Example.args = { id: 'example', label: 'What is your name?' };

export const FixedWidthInputs: Story = () => (
  <>
    <Input width={30} label="30 character width" />
    <Input width={20} label="20 character width" />
    <Input width={10} label="10 character width" />
    <Input width={5} label="5 character width" />
    <Input width={4} label="4 character width" />
    <Input width={3} label="3 character width" />
    <Input width={2} label="2 character width" />
  </>
);

export const FluidWidthInputs: Story = () => (
  <>
    <Input width="full" label="Full width" />
    <Input width="three-quarters" label="Three-quarters width" />
    <Input width="two-thirds" label="Two-thirds width" />
    <Input width="one-half" label="One-half width" />
    <Input width="one-third" label="One-third width" />
    <Input width="one-quarter" label="One-quarter width" />
  </>
);

export const UsingHintText: Story = (args) => <Input {...args} />;
UsingHintText.args = {
  width: 10,
  id: 'example-with-hint-text',
  label: 'What is your NHS number?',
  hint: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.',
  inputMode: 'numeric',
  pattern: '[0-9]*',
};

export const WithErrorMessage: Story = (args) => <Input {...args} />;
WithErrorMessage.args = { id: 'error-example', label: 'Full name', error: 'Enter your full name' };

const description = `
## Guidance

> Use text input to let users enter a single line of text.

Find out more about the text input component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/text-input).

## Example`;

export default {
  title: 'Form Elements/Text Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};
