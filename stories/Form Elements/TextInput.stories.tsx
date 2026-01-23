import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '#components/form-elements/button/Button.js';
import { TextInput } from '#components/form-elements/text-input/index.js';

const meta: Meta<typeof TextInput> = {
  title: 'Form Elements/TextInput',
  component: TextInput,
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

export const Standard: Story = {};
export const WithHintText: Story = {
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
  args: {
    label: 'What is your NHS number?',
    error: 'Enter NHS number',
    code: true,
    inputMode: 'numeric',
    spellCheck: false,
  },
};

export const WithErrorAndHintText: Story = {
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
  args: {
    label: 'Cost in pounds',
    prefix: '£',
    width: 5,
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Weight in kilograms',
    suffix: 'kg',
    width: 5,
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: 5,
  },
};

export const WithPrefixAndSuffixAndError: Story = {
  args: {
    label: 'Cost per item, in pounds',
    error: 'Enter a cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: 5,
  },
};

export const WithButton: Story = {
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
