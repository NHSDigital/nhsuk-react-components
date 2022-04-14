import { Story } from '@storybook/react';
import React from 'react';
import { Textarea } from '../../src';

export const Example: Story = (args) => <Textarea {...args} />;
Example.args = {
  id: 'example',
  label: 'Can you provide more detail?',
  hint: 'Do not include personal or financial information, for example, your National Insurance number of credit card details.',
  rows: 5,
};

const description = `
## Guidance

> Use textarea to let users enter more than 1 line of text.

Find out more about the textarea component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/textarea).

## Example`;

export default {
  title: 'Form Elements/Textarea',
  component: Textarea,
  argTypes: {
    hint: { type: { name: 'string' } },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};
