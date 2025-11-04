import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Checkboxes } from '#components/form-elements/checkboxes/index.js';
import { Radios } from '#components/form-elements/radios/index.js';
import { TextInput } from '#components/form-elements/text-input/index.js';

const meta: Meta<typeof Radios> = {
  title: 'Form Elements/Radios',
  component: Radios,
  args: {
    legend: 'Have you changed your name?',
    legendProps: { isPageHeading: true, size: 'l' },
    hint: 'This includes changing your last name or spelling your name differently',
  },
};
export default meta;
type Story = StoryObj<typeof Radios>;

export const StandardRadios: Story = {
  args: {
    idPrefix: 'standard',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no" defaultChecked>
        No
      </Radios.Item>
    </Radios>
  ),
};

export const InlineRadios: Story = {
  args: {
    idPrefix: 'inline',
    inline: true,
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no" defaultChecked>
        No
      </Radios.Item>
    </Radios>
  ),
};

export const RadiosWithCaption: Story = {
  args: {
    legend: (
      <>
        <span className="nhsuk-caption-l">About you</span> Have you changed your name?
      </>
    ),
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no" defaultChecked>
        No
      </Radios.Item>
    </Radios>
  ),
};

export const RadiosWithConditionalContent: Story = {
  args: {
    legend: 'Impairment requirement',
    hint: 'Select relevant options',
    idPrefix: 'conditional',
  },
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
      <Radios {...args}>
        <Radios.Item value="yes" conditional={impairmentsForm}>
          Patient requires an impairment to be added
        </Radios.Item>
        <Radios.Item value="no">Patient would prefer not to say</Radios.Item>
      </Radios>
    );
  },
};

export const RadiosWithADivider: Story = {
  args: {
    legend: 'How do you want to sign in?',
    hint: undefined,
    idPrefix: 'divider',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="government-gateway">Use Government Gateway</Radios.Item>
      <Radios.Item value="nhsuk-login">Use NHS.UK login</Radios.Item>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Item value="create-account">Create an account</Radios.Item>
    </Radios>
  ),
};

export const RadiosWithHintsOnItems: Story = {
  args: {
    legend: 'How do you want to sign in?',
    hint: undefined,
    idPrefix: 'hints',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item
        value="government-gateway"
        hint="You'll have a user ID if you've registered for self-assessment or filed a tax return online before."
      >
        Use Government Gateway
      </Radios.Item>
      <Radios.Item
        value="nhsuk-login"
        hint="You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      >
        Use NHS.UK login
      </Radios.Item>
    </Radios>
  ),
};

export const SmallRadios: Story = {
  args: {
    ...StandardRadios.args,
    legendProps: { isPageHeading: true, size: 'm' },
    idPrefix: 'small',
    small: true,
  },
  render: StandardRadios.render,
};

export const SmallInlineRadios: Story = {
  args: {
    ...InlineRadios.args,
    legendProps: { isPageHeading: true, size: 'm' },
    small: true,
  },
  render: InlineRadios.render,
};

export const SmallRadiosWithConditionalContent: Story = {
  args: {
    ...RadiosWithConditionalContent.args,
    legendProps: { isPageHeading: true, size: 'm' },
    idPrefix: 'small-conditional',
    small: true,
  },
  render: RadiosWithConditionalContent.render,
};

export const SmallRadiosWithADivider: Story = {
  args: {
    ...RadiosWithADivider.args,
    legendProps: { isPageHeading: true, size: 'm' },
    idPrefix: 'small-divider',
    small: true,
  },
  render: RadiosWithADivider.render,
};

export const SmallRadiosWithHintsOnItems: Story = {
  args: {
    ...RadiosWithHintsOnItems.args,
    legendProps: { isPageHeading: true, size: 'm' },
    idPrefix: 'small-hints',
    small: true,
  },
  render: RadiosWithHintsOnItems.render,
};

export const DisabledRadios: Story = {
  args: {
    idPrefix: 'disabled',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item disabled value="yes">
        Yes
      </Radios.Item>
      <Radios.Item disabled value="no">
        No
      </Radios.Item>
    </Radios>
  ),
};

export const RadiosWithError: Story = {
  args: {
    idPrefix: 'error',
  },
  render: function RadiosWithErrorRender(args) {
    const [error, setError] = useState('Select yes if you have changed your name');
    return (
      <>
        <Radios error={error} {...args}>
          <Radios.Item value="yes">Yes</Radios.Item>
          <Radios.Item value="no" defaultChecked>
            No
          </Radios.Item>
        </Radios>
        <TextInput value={error} onChange={(e) => setError(e.currentTarget.value)} />
      </>
    );
  },

  name: 'Radios With Error (String)',
};
