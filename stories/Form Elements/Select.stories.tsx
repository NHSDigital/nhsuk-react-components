import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, TextInput } from '#components';

const meta: Meta<typeof Select> = {
  title: 'Form Elements/Select',
  component: Select,
  args: {
    label: 'Label text goes here',
    labelProps: { isPageHeading: true, size: 'l' },
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Standard: Story = {
  args: {
    defaultValue: '2',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3" disabled>
        NHS.UK frontend option 3
      </Select.Option>
    </Select>
  ),
};

export const SelectWithHintText: Story = {
  args: {
    hint: 'Hint text goes here',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
    </Select>
  ),
};

export const SelectWithHintHTML: Story = {
  render: () => (
    <Select
      label="Label text goes here"
      labelProps={{ size: 'l' }}
      hint={<span className="nhsuk-u-nowrap">HTML hint text goes here</span>}
    >
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
    </Select>
  ),
};

export const SelectWithError: Story = {
  render: function SelectWithErrorRender(args) {
    const [error, setError] = useState<string>('Error message goes here');
    return (
      <>
        <Select error={error} {...args}>
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <TextInput onChange={(e) => setError(e.currentTarget.value)} value={error} />
      </>
    );
  },

  name: 'Select With Error (String)',
};

export const SelectWithHTMLError: Story = {
  render: function SelectWithErrorRender() {
    const error = <span className="nhsuk-u-nowrap">HTML error message goes here</span>;
    return (
      <>
        <Select label="Label text goes here" labelProps={{ size: 'l' }} error={error}>
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
      </>
    );
  },

  name: 'Select With Error (HTML)',
};

export const SelectWithErrorAndHintText: Story = {
  args: {
    hint: 'Hint text goes here',
  },
  render: function SelectWithErrorAndHintTextRender(args) {
    const [error, setError] = useState<string>('Error message goes here');
    return (
      <>
        <Select error={error} {...args}>
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <TextInput onChange={(e) => setError(e.currentTarget.value)} value={error} />
      </>
    );
  },

  name: 'Select With Error and Hint (String)',
};
