import { Input } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>;

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
