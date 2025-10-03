import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkboxes, Radios, TextInput } from '#components';

const meta: Meta<typeof Radios> = {
  title: 'Form Elements/Radios',
  component: Radios,
};
export default meta;
type Story = StoryObj<typeof Radios>;

export const StandardRadios: Story = {
  render: (args) => (
    <Radios
      legend="Have you changed your name?"
      legendProps={{ size: 'l' }}
      hint="This includes changing your last name or spelling your name differently"
      name="example"
      id="standard-example"
    >
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no" checked>
        No
      </Radios.Item>
    </Radios>
  ),
};

export const InlineRadios: Story = {
  render: (args) => (
    <Radios
      legend="Have you changed your name?"
      legendProps={{ size: 'l' }}
      hint="This includes changing your last name or spelling your name differently"
      name="example"
      id="inline-example"
      inline
    >
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no" checked>
        No
      </Radios.Item>
    </Radios>
  ),
};

export const DisabledRadios: Story = {
  render: (args) => (
    <Radios
      legend="Have you changed your name?"
      legendProps={{ size: 'l' }}
      hint="This includes changing your last name or spelling your name differently"
      name="example"
      id="disabled-example"
    >
      <Radios.Item disabled value="yes">
        Yes
      </Radios.Item>
      <Radios.Item disabled value="no">
        No
      </Radios.Item>
    </Radios>
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
        <Radios
          legend="Impairment requirement"
          legendProps={{ size: 'l' }}
          hint="Select relevant options"
          name="example"
          id="example-conditional"
        >
          <Radios.Item id="hello1" value="yes" conditional={impairmentsForm}>
            Patient requires an impairment to be added
          </Radios.Item>
          <Radios.Item id="hello2" value="no">
            Patient would prefer not to say
          </Radios.Item>
        </Radios>
      </form>
    );
  },
};

export const RadiosWithADivider: Story = {
  render: (args) => (
    <Radios
      legend="How do you want to sign in?"
      legendProps={{ size: 'l' }}
      name="example"
      id="example-divider"
    >
      <Radios.Item value="government-gateway">Use Government Gateway</Radios.Item>
      <Radios.Item value="nhsuk-login">Use NHS.UK login</Radios.Item>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Item value="create-account">Create an account</Radios.Item>
    </Radios>
  ),
};

export const RadiosWithHintsOnItems: Story = {
  render: (args) => (
    <Radios
      legend="How do you want to sign in?"
      legendProps={{ size: 'l' }}
      name="example"
      id="example-with-hints"
    >
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

export const RadiosWithError: Story = {
  render: function RadiosWithErrorRender() {
    const [error, setError] = useState('Select yes if you have changed your name');
    return (
      <>
        <Radios
          legend="Have you changed your name?"
          legendProps={{ size: 'l' }}
          hint="This includes changing your last name or spelling your name differently"
          name="example-with-err-string"
          error={error}
        >
          <Radios.Item id="example-1" value="yes">
            Yes
          </Radios.Item>
          <Radios.Item id="example-2" value="no" checked>
            No
          </Radios.Item>
        </Radios>
        <TextInput value={error} onChange={(e) => setError(e.currentTarget.value)} />
      </>
    );
  },

  name: 'Radios With Error (String)',
};
