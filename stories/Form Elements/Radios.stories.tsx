import React, { useState, MouseEvent } from 'react';
import { Radios, Fieldset, Button, TextInput, Checkboxes } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radios> = {
  title: 'Form Elements/Radios',
  component: Radios,
};
export default meta;
type Story = StoryObj<typeof Radios>;

Radios.Item.displayName = 'Radios.Item';
Radios.Divider.displayName = 'Radios.Divider';

export const StandardRadios: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios
        name="example"
        id="standard-example"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Item value="yes">Yes</Radios.Item>
        <Radios.Item value="no" checked>
          No
        </Radios.Item>
      </Radios>
    </Fieldset>
  ),
};

export const InlineRadios: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios
        name="example"
        inline
        id="inline-example"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Item value="yes">Yes</Radios.Item>
        <Radios.Item value="no" checked>
          No
        </Radios.Item>
      </Radios>
    </Fieldset>
  ),
};

export const DisabledRadios: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios
        name="example"
        id="disabled-example"
        hint="This includes changing your last name or spelling your name differently."
      >
        <Radios.Item disabled value="yes">
          Yes
        </Radios.Item>
        <Radios.Item disabled value="no">
          No
        </Radios.Item>
      </Radios>
    </Fieldset>
  ),
};

export const RadiosWithConditionalContent: Story = {
  render: (args) => {
    const impairmentsForm = (
      <Checkboxes name="impairments" id="impairments">
        <Checkboxes.Item value="autism">Autism</Checkboxes.Item>
        <Checkboxes.Item value="developmental-conditions">
          Developmental conditions (excluding autism)
        </Checkboxes.Item>
        <Checkboxes.Item value="dementia">Dementia</Checkboxes.Item>
        <Checkboxes.Item value="learning-disability">Learning disability</Checkboxes.Item>
        <Checkboxes.Item value="mental-health-condition">Mental Health Condition</Checkboxes.Item>
        <Checkboxes.Item value="physical-disability">Physical disability</Checkboxes.Item>
        <Checkboxes.Item value="sensory-disability">
          Sensory disability - such as sight, hearing or verbal
        </Checkboxes.Item>
        <Checkboxes.Item value="long-term-condition">Long-term condition</Checkboxes.Item>
      </Checkboxes>
    );

    return (
      <form style={{ padding: 20 }}>
        <Fieldset>
          <Fieldset.Legend>Impairment requirement</Fieldset.Legend>
          <Radios name="example" id="example-conditional" hint="Select relevant options.">
            <Radios.Item id="hello1" value="yes" conditional={impairmentsForm}>
              Patient requires an impairment to be added
            </Radios.Item>
            <Radios.Item id="hello2" value="no">
              Patient would prefer not to say
            </Radios.Item>
          </Radios>
        </Fieldset>
      </form>
    );
  },
};

export const RadiosWithADivider: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios name="example" id="example-divider">
        <Radios.Item value="government-gateway">Use Government Gateway</Radios.Item>
        <Radios.Item value="nhsuk-login">Use NHS.UK login</Radios.Item>
        <Radios.Divider>or</Radios.Divider>
        <Radios.Item value="create-account">Create an account</Radios.Item>
      </Radios>
    </Fieldset>
  ),
};

export const RadiosWithHintsOnItems: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios name="example" id="example-with-hints">
        <Radios.Item
          value="government-gateway"
          hint="You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before."
        >
          Use Government Gateway
        </Radios.Item>
        <Radios.Item
          value="nhsuk-login"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        >
          Use NHS.UK login
        </Radios.Item>
      </Radios>
    </Fieldset>
  ),
};

export const RadiosWithoutFieldset: Story = {
  render: (args) => (
    <Radios name="colours" id="colours">
      <Radios.Item value="red">Red</Radios.Item>
      <Radios.Item value="green">Green</Radios.Item>
      <Radios.Item value="blue">Blue</Radios.Item>
    </Radios>
  ),
};

export const RadiosWithErrorBoolean: Story = {
  render: function RadiosWithErrorBooleanRender() {
    const [error, setError] = useState<boolean>(true);
    return (
      <>
        <Fieldset>
          <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
          <Radios
            name="example-with-err-boolean"
            error={error}
            hint="This includes changing your last name or spelling your name differently."
          >
            <Radios.Item id="example-1" value="yes">
              Yes
            </Radios.Item>
            <Radios.Item id="example-2" value="no" checked>
              No
            </Radios.Item>
          </Radios>
        </Fieldset>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  },

  name: 'Radios With Error (Boolean)',
};

export const RadiosWithErrorString: Story = {
  render: function RadiosWithErrorStringRender() {
    const [error, setError] = useState('Please select an option');
    return (
      <>
        <Fieldset>
          <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
          <Radios
            name="example-with-err-string"
            error={error}
            hint="This includes changing your last name or spelling your name differently."
          >
            <Radios.Item id="example-1" value="yes">
              Yes
            </Radios.Item>
            <Radios.Item id="example-2" value="no" checked>
              No
            </Radios.Item>
          </Radios>
        </Fieldset>
        <TextInput value={error} onChange={(e) => setError(e.currentTarget.value)} />
      </>
    );
  },

  name: 'Radios With Error (String)',
};
