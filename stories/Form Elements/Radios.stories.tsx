import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Radios } from '#components/form-elements/radios/index.js';

import { ExampleEmail, ExampleMobilePhoneNumber, ExamplePhoneNumber } from './TextInput.stories.js';

const meta: Meta<typeof Radios> = {
  title: 'Form Elements/Radios',
  component: Radios,
  args: {
    legend: 'How do you want to be contacted about this?',
    legendProps: { isPageHeading: true, size: 'l' },
    name: 'example',
  },
};

export default meta;
type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  name: 'Radios default',
  args: {
    legend: 'Are you 18 or over?',
    name: 'default',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no">No</Radios.Item>
    </Radios>
  ),
};

export const Small: Story = {
  name: 'Radios small',
  args: {
    ...Default.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small',
    small: true,
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes" defaultChecked>
        Yes
      </Radios.Item>
      <Radios.Item value="no">No</Radios.Item>
    </Radios>
  ),
};

export const Inline: Story = {
  name: 'Radios inline',
  args: {
    legend: 'Are you 18 or over?',
    name: 'inline',
    inline: true,
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no">No</Radios.Item>
    </Radios>
  ),
};

export const SmallInline: Story = {
  name: 'Radios inline, small',
  args: {
    ...Inline.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-inline',
    small: true,
  },
  render: Inline.render,
};

export const WithCaption: Story = {
  name: 'Radios with caption',
  args: {
    legend: (
      <>
        <span className="nhsuk-caption-l">About you</span> Are you 18 or over?
      </>
    ),
    name: 'with-caption',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no">No</Radios.Item>
    </Radios>
  ),
};

export const SmallWithCaption: Story = {
  name: 'Radios with caption, small',
  args: {
    ...WithCaption.args,
    legend: (
      <>
        <span className="nhsuk-caption-m">About you</span> Are you 18 or over?
      </>
    ),
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-caption',
    small: true,
  },
  render: WithCaption.render,
};

export const WithHint: Story = {
  name: 'Radios with hint',
  args: {
    hint: 'Select 1 option',
    name: 'with-hint',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="email">Email</Radios.Item>
      <Radios.Item value="phone">Phone</Radios.Item>
      <Radios.Item value="text">Text message</Radios.Item>
    </Radios>
  ),
};

export const SmallWithHint: Story = {
  name: 'Radios with hint, small',
  args: {
    ...WithHint.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-hint',
    small: true,
  },
  render: WithHint.render,
};

export const WithHintOnItems: Story = {
  name: 'Radios with hints on items',
  args: {
    legend: 'Do you have a mobile phone with signal?',
    name: 'with-hint-on-items',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="mobile" hint="We will text you a 6 digit security code">
        Yes, I have a mobile phone with signal
      </Radios.Item>
      <Radios.Item value="landline" hint="We will call you to give you a 6 digit security code">
        No, I want to use my landline
      </Radios.Item>
    </Radios>
  ),
};

export const SmallWithHintOnItems: Story = {
  name: 'Radios with hints on items, small',
  args: {
    ...WithHintOnItems.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-hint-on-items',
    small: true,
  },
  render: WithHintOnItems.render,
};

export const WithError: Story = {
  name: 'Radios with error message',
  args: {
    error: 'Select how you want to be contacted',
    name: 'with-error',
  },
  render: WithHint.render,
};

export const SmallWithError: Story = {
  name: 'Radios with error message, small',
  args: {
    ...WithError.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-error',
    small: true,
  },
  render: WithError.render,
};

export const WithHintAndError: Story = {
  name: 'Radios with error message and hint',
  args: {
    hint: 'Select 1 option',
    error: 'Select how you want to be contacted',
    name: 'with-hint-and-error',
  },
  render: WithHint.render,
};

export const SmallWithHintAndError: Story = {
  name: 'Radios with error message and hint, small',
  args: {
    ...WithHintAndError.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-hint-and-error',
    small: true,
  },
  render: WithHintAndError.render,
};

export const WithDisabledItems: Story = {
  name: 'Radios with disabled items',
  args: {
    name: 'with-disabled-items',
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

export const SmallWithDisabledItems: Story = {
  name: 'Radios with disabled items, small',
  args: {
    ...WithDisabledItems.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-disabled-items',
    small: true,
  },
  render: WithDisabledItems.render,
};

export const WithDivider: Story = {
  name: 'Radios with divider',
  args: {
    legend: "Have you had all the vaccinations you're eligible for in the UK?",
    hint: 'You would have got these vaccinations at school, from your GP surgery or another healthcare provider',
    name: 'with-divider',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="yes">Yes</Radios.Item>
      <Radios.Item value="no">No</Radios.Item>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Item value="unknown">I do not know</Radios.Item>
    </Radios>
  ),
};

export const SmallWithDivider: Story = {
  name: 'Radios divider, small',
  args: {
    ...WithDivider.args,
    legendProps: { isPageHeading: true, size: 'm' },
    name: 'small-with-divider',
    small: true,
  },
  render: WithDivider.render,
};

export const WithValues: Story = {
  name: 'Radios with pre-checked value',
  args: {
    name: 'with-values',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="email" defaultChecked>
        Email
      </Radios.Item>
      <Radios.Item value="phone">Phone</Radios.Item>
      <Radios.Item value="text">Text message</Radios.Item>
    </Radios>
  ),
};

export const WithConditionalContent: Story = {
  name: 'Radios with conditional content',
  args: {
    hint: 'Select 1 option',
    name: 'with-conditional-content',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="email" conditional={<ExampleEmail />}>
        Email
      </Radios.Item>
      <Radios.Item value="phone" conditional={<ExamplePhoneNumber />}>
        Phone
      </Radios.Item>
      <Radios.Item value="text" conditional={<ExampleMobilePhoneNumber />}>
        Text message
      </Radios.Item>
    </Radios>
  ),
};

export const WithConditionalContentValues: Story = {
  name: 'Radios with conditional content and pre-checked value',
  args: {
    name: 'with-conditional-content-values',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="email" conditional={<ExampleEmail />} defaultChecked>
        Email
      </Radios.Item>
      <Radios.Item value="phone" conditional={<ExamplePhoneNumber />}>
        Phone
      </Radios.Item>
      <Radios.Item value="text" conditional={<ExampleMobilePhoneNumber />}>
        Text message
      </Radios.Item>
    </Radios>
  ),
};

export const WithConditionalContentError: Story = {
  name: 'Radios with conditional content, error message',
  args: {
    hint: 'Select 1 option',
    error: 'Select how you like to be contacted',
    name: 'with-conditional-content-error',
  },
  render: WithConditionalContent.render,
};

export const WithConditionalContentErrorNested: Story = {
  name: 'Radios with conditional content, error message (nested)',
  args: {
    hint: 'Select 1 option',
    name: 'with-conditional-content-error-nested',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Item value="email" conditional={<ExampleEmail />}>
        Email
      </Radios.Item>
      <Radios.Item
        value="phone"
        conditional={<ExamplePhoneNumber error="Enter your phone number" />}
        defaultChecked
      >
        Phone
      </Radios.Item>
      <Radios.Item value="text" conditional={<ExampleMobilePhoneNumber />}>
        Text message
      </Radios.Item>
    </Radios>
  ),
};
