import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '#components/form-elements/button/Button.js';
import { TextInput, type TextInputProps } from '#components/form-elements/text-input/index.js';

const meta: Meta<typeof TextInput> = {
  title: 'Form Elements/Text input',
  component: TextInput,
  excludeStories: /^Example/,
  args: {
    id: 'input-example',
    name: 'example',
    label: 'What is your full name?',
    labelProps: { isPageHeading: true, size: 'l' },
  },
  argTypes: {
    ref: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  name: 'Text input default',
};

export const WithHint: Story = {
  name: 'Text input with hint',
  args: {
    label: 'What is your NHS number?',
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
    hint: (
      <>
        This is a 10 digit number (like <span className="nhsuk-u-nowrap">999 123 4567</span>) that
        you can find on an NHS letter, prescription or in the NHS App
      </>
    ),
  },
};

export const WithError: Story = {
  name: 'Text input with error message',
  args: {
    label: 'What is your NHS number?',
    error: 'Enter NHS number',
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
  },
};

export const WithErrorAndHint: Story = {
  name: 'Text input with error message and hint',
  args: {
    label: 'What is your NHS number?',
    error: 'Enter NHS number',
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
    hint: (
      <>
        This is a 10 digit number (like <span className="nhsuk-u-nowrap">999 123 4567</span>) that
        you can find on an NHS letter, prescription or in the NHS App
      </>
    ),
  },
};

export const WithWidthModifier: Story = {
  name: 'Text input with width modifier',
  args: {
    label: 'What is your NHS number?',
    width: 10,
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
    hint: (
      <>
        This is a 10 digit number (like <span className="nhsuk-u-nowrap">999 123 4567</span>) that
        you can find on an NHS letter, prescription or in the NHS App
      </>
    ),
  },
};

export const WithPrefix: Story = {
  name: 'Text input with prefix',
  args: {
    label: 'Cost in pounds',
    prefix: '£',
    width: 5,
  },
};

export const WithSuffix: Story = {
  name: 'Text input with suffix',
  args: {
    label: 'Weight in kilograms',
    suffix: 'kg',
    width: 5,
  },
};

export const WithPrefixAndSuffix: Story = {
  name: 'Text input with prefix and suffix',
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: 5,
  },
};

export const WithPrefixAndSuffixAndError: Story = {
  name: 'Text input with prefix and suffix and error message',
  args: {
    label: 'Cost per item, in pounds',
    error: 'Enter a cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: 5,
  },
};

export const WithButton: Story = {
  name: 'Text input with button',
  args: {
    label: 'What is your NHS number?',
    width: 10,
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
    formGroupProps: {
      afterInput: (
        <Button secondary small>
          Search
        </Button>
      ),
    },
  },
};

export const WithButtonAndError: Story = {
  name: 'Text input with button and error message',
  args: {
    label: 'What is your NHS number?',
    error: 'Enter NHS number',
    width: 10,
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
    formGroupProps: {
      afterInput: (
        <Button secondary small>
          Search
        </Button>
      ),
    },
  },
};

export const ExampleEmail = (args: TextInputProps) => (
  <TextInput
    label="Email address"
    name="contact-by-email"
    className="nhsuk-u-width-two-thirds"
    spellCheck="false"
    {...args}
  />
);

export const ExamplePhoneNumber = (args: TextInputProps) => (
  <TextInput
    label="Phone number"
    name="contact-by-phone"
    type="tel"
    className="nhsuk-u-width-two-thirds"
    {...args}
  />
);

export const ExampleMobilePhoneNumber = (args: TextInputProps) => (
  <TextInput
    label="Mobile phone number"
    name="contact-by-text"
    type="tel"
    className="nhsuk-u-width-two-thirds"
    {...args}
  />
);
