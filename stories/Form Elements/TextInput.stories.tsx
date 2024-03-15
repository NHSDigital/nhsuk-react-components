import { TextInput } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  title: 'Form Elements/TextInput',
  component: TextInput,
  args: {
    id: 'input-example',
    name: 'test-name',
    label: 'National Insurance Number',
  },
  argTypes: {
    inputRef: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Standard: Story = {};
export const WithHintText: Story = {
  args: {
    hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  },
};

export const WithErrorBoolean: Story = {
  args: {
    error: true,
    hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  },
  name: 'With Error (Boolean)',
};

export const WithErrorString: Story = {
  args: {
    error: 'Error message goes here',
    hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  },
  name: 'With Error (String)',
};

export const WithWidthModifier: Story = {
  args: {
    width: 10,
    hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    width: 5,
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
  },
};
