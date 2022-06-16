import { Story } from '@storybook/react';
import React from 'react';
import { Fieldset, FormGroup, Radios } from '../../src';

export const Example: Story = (args) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend isPageHeading>Are you 18 or over?</Fieldset.Legend>
      <Radios {...args}>
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no">No</Radios.Radio>
      </Radios>
    </Fieldset>
  </FormGroup>
);
Example.args = { id: 'example' };

export const InlineRadios: Story = (args) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend isPageHeading>Are you 18 or over?</Fieldset.Legend>
      <Radios {...args}>
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no">No</Radios.Radio>
      </Radios>
    </Fieldset>
  </FormGroup>
);
InlineRadios.args = { id: 'inline-example', inline: true };

export const RadiosWithHints: Story = (args) => (
  <Fieldset>
    <Fieldset.Legend isPageHeading>Do you know your NHS number?</Fieldset.Legend>
    <FormGroup>
      <Radios {...args}>
        <Radios.Radio value="yes">Yes, I know my NHS number</Radios.Radio>
        <Radios.Radio value="no">No, I do not know my NHS number</Radios.Radio>
        <Radios.Radio value="not-sure">I&#39;m not sure</Radios.Radio>
      </Radios>
    </FormGroup>
  </Fieldset>
);
RadiosWithHints.args = {
  id: 'radios-with-hints',
  hint: (
    <>
      <p className="nhsuk-u-margin-bottom-2">This is a 10 digit number, like 385 777 3456.</p>
      <p>
        You can find it on any letter the NHS has sent you, on a prescription or by logging in to a
        GP practice online service.
      </p>
    </>
  ),
};

export const RadioItemsWithHints: Story = (args) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend isPageHeading>How do you want to sign in?</Fieldset.Legend>
    </Fieldset>
    <Radios {...args}>
      <Radios.Radio
        value="gateway"
        hint="You'll have a user ID if you've registered for the NHS App."
      >
        Sign in with NHS login
      </Radios.Radio>
      <Radios.Radio
        value="verify"
        hint="You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      >
        Sign in with GOV.UK Verify
      </Radios.Radio>
    </Radios>
  </FormGroup>
);
RadioItemsWithHints.args = { id: 'radio-items-with-hints' };

export const RadioItemsWithTextDivider: Story = (args) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend isPageHeading>How do you want to sign in?</Fieldset.Legend>
      <Radios {...args}>
        <Radios.Radio value="nhs-login">Use NHS login</Radios.Radio>
        <Radios.Radio value="govuk-verify">Use GOV.UK Verify</Radios.Radio>
        <Radios.Divider>or</Radios.Divider>
        <Radios.Radio value="create-account">Create an account</Radios.Radio>
      </Radios>
    </Fieldset>
  </FormGroup>
);

const description = `
## Guidance

> Use radios when you want users to select only 1 option from a list.

Find out more about the radios component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/radios).

## Example`;

export default {
  title: 'Form Elements/Radios',
  component: Radios,
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
