import { type Meta, type StoryObj } from '@storybook/react-vite';
import { TextInput } from '#components';

const meta: Meta<typeof TextInput> = {
  title: 'Form Elements/TextInput',
  component: TextInput,
  args: {
    id: 'input-example',
    name: 'test-name',
    label: 'National Insurance number',
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
    hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  },
};

export const WithError: Story = {
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
