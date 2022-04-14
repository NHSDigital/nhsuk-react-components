import { Story } from '@storybook/react';
import React from 'react';
import { Fieldset, FormGroup, Input, VisuallyHidden } from '../../src';

export const Example: Story = (args) => (
  <FormGroup>
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
      <Input
        id="address-line-1"
        label={
          <>
            Building and street <VisuallyHidden>line 1 of 2</VisuallyHidden>
          </>
        }
      />
      <Input
        id="address-line-2"
        label={<VisuallyHidden>Building and street line 2 of 2</VisuallyHidden>}
      />
      <Input id="address-town" width="two-thirds" label="Town or city" />
      <Input id="address-county" width="two-thirds" label="County" />
      <Input id="address-postcode" width={10} label="Postcode" />
    </Fieldset>
  </FormGroup>
);

const description = `
## Guidance

> Use a fieldset to group related form inputs.

Find out more about the fieldset component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/fieldset).

## Example`;

export default {
  title: 'Form Elements/Fieldset',
  component: Fieldset,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};
