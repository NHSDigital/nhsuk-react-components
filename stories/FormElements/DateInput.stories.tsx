import { Story } from '@storybook/react';
import React from 'react';
import { DateInput, Fieldset, FormGroup, Hint } from '../../src';

export const Example: Story = (args) => (
  <FormGroup>
    <Fieldset aria-describedby="example-hint" role="group">
      <Fieldset.Legend isPageHeading size="l">
        What is your date of birth?
      </Fieldset.Legend>
      <Hint id="example-hint">For example, 15 3 1984</Hint>
      <DateInput {...args} />
    </Fieldset>
  </FormGroup>
);
Example.args = { id: 'example', defaultValue: { day: '27', month: '06', year: '2000' } };

const description = `
## Guidance

> Use date input to help users enter a memorable date, like their date of birth.

Find out more about the date input component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).

## Example`;

export default {
  title: 'Form Elements/Date Input',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};
