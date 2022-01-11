import type { Story } from '@storybook/react';
import React from 'react';
import { ErrorMessage, Fieldset, FormGroup, Hint, Input, Radios } from '../../src';

export const StandardRadios: Story = ({ label, ...restArgs }) => (
  <Fieldset aria-describedby={`${restArgs.id}--hint`}>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  </Fieldset>
);
StandardRadios.args = {
  id: 'example-1',
  name: 'example-1',
  label: 'Have you changed your name?',
  hint: 'This includes changing your last name or spelling your name differently.',
};

export const InlineRadios: Story = ({ label, ...restArgs }) => (
  <Fieldset aria-describedby={`${restArgs.id}--hint`}>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  </Fieldset>
);
InlineRadios.args = {
  id: 'example-2',
  name: 'example-2',
  label: 'Have you changed your name?',
  hint: 'This includes changing your last name or spelling your name differently.',
  inline: true,
};

export const DisabledRadios: Story = ({ label, ...restArgs }) => (
  <Fieldset>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio disabled value="yes">
        Yes
      </Radios.Radio>
      <Radios.Radio disabled value="no">
        No
      </Radios.Radio>
    </Radios>
  </Fieldset>
);
DisabledRadios.args = {
  id: 'example-3',
  name: 'example-3',
  label: 'Have you changed your name?',
  hint: 'This includes changing your last name or spelling your name differently.',
};

export const RadiosWithADivider: Story = ({ label, ...restArgs }) => (
  <Fieldset>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio value="government-gateway">Use Government Gateway</Radios.Radio>
      <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Radio value="create-account">Create an account</Radios.Radio>
    </Radios>
  </Fieldset>
);
RadiosWithADivider.args = {
  id: 'example-divider',
  name: 'example-4',
  label: 'How do you want to sign in?',
};

export const RadiosWithHintsOnItems: Story = ({ label, ...restArgs }) => (
  <Fieldset>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio
        value="government-gateway"
        hint="You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before."
      >
        Use Government Gateway
      </Radios.Radio>
      <Radios.Radio
        value="nhsuk-login"
        hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      >
        Use NHS.UK login
      </Radios.Radio>
    </Radios>
  </Fieldset>
);
RadiosWithHintsOnItems.args = {
  label: 'How do you want to sign in?',
  id: 'example-item-hint',
  name: 'example-5',
};

export const RadiosWithErrorBoolean: Story = ({ label, ...restArgs }) => (
  <Fieldset aria-describedby={`${restArgs.id}--hint`}>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  </Fieldset>
);
RadiosWithErrorBoolean.args = {
  id: 'example-error-boolean',
  name: 'example-6',
  label: 'Have you changed your name?',
  hint: 'This includes changing your last name or spelling your name differently.',
  error: true,
};
RadiosWithErrorBoolean.argTypes = { error: { type: 'boolean' } };
RadiosWithErrorBoolean.storyName = 'Radios With Error (Boolean)';

export const RadiosWithErrorString: Story = ({ label, ...restArgs }) => (
  <Fieldset aria-describedby={`${restArgs.id}--hint`}>
    <Fieldset.Legend>{label}</Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  </Fieldset>
);
RadiosWithErrorString.args = {
  id: 'example-error-string',
  name: 'example-7',
  label: 'Have you changed your name?',
  hint: 'This includes changing your last name or spelling your name differently.',
  error: 'Please select an option',
};
RadiosWithErrorString.storyName = 'Radios With Error (String)';

export const RadiosWithoutFieldset: Story = (args) => (
  <Radios {...args}>
    <Radios.Radio value="red">Red</Radios.Radio>
    <Radios.Radio value="green">Green</Radios.Radio>
    <Radios.Radio value="blue">Blue</Radios.Radio>
  </Radios>
);

export const RadiosWithConditionalContent: Story = ({ label, ...restArgs }) => (
  <Fieldset>
    <Fieldset.Legend isPageHeading size="l">
      {label}
    </Fieldset.Legend>
    <Radios {...restArgs}>
      <Radios.Radio value="email" conditional={<Input label="Email address" id="email" />}>
        Email
      </Radios.Radio>
      <Radios.Radio value="phone" conditional={<Input label="Phone number" id="phone" />}>
        Phone
      </Radios.Radio>
      <Radios.Radio value="text" conditional={<Input label="Mobile phone number" id="mobile" />}>
        Text Message
      </Radios.Radio>
    </Radios>
  </Fieldset>
);
RadiosWithConditionalContent.args = {
  label: 'How would you prefer to be contacted?',
  hint: 'Select one option.',
  name: 'example-8',
  id: 'example-conditional',
};

export const RadiosWithFormGroup: Story = ({ label, hint, error, ...args }) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend>{label}</Fieldset.Legend>
      {hint && <Hint>{hint}</Hint>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Radios {...args}>
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no">No</Radios.Radio>
      </Radios>
    </Fieldset>
  </FormGroup>
);
RadiosWithFormGroup.args = {
  id: 'example-form-group',
  name: 'example-9',
  label: 'Have you changed your name?',
  hint: 'This includes changing your last name or spelling your name differently.',
  error: 'Please select a value',
};
RadiosWithFormGroup.storyName = 'Using FormGroup';

export default {
  title: 'Forms/Radios',
  component: Radios,
  argTypes: {
    label: { type: { name: 'string' } },
    hint: { type: { name: 'string' } },
    error: { type: { name: 'string' } },
  },
};
