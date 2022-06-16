import { Story } from '@storybook/react';
import React from 'react';
import { Select } from '../../src';

export const Example: Story = (args) => (
  <Select {...args}>
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2" selected>
      NHS.UK frontend option 2
    </option>
    <option value="3" disabled>
      NHS.UK frontend option 3
    </option>
  </Select>
);
Example.args = { id: 'select-1', label: 'Label text goes here' };

const description = `
## Guidance

> Use select to let users choose an option from a long list but only use it as a last resort.

Find out more about the select component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/select).

## Example`;

export default {
  title: 'Form Elements/Select',
  component: Select,
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
