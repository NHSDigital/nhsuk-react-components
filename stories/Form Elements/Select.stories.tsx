import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '#components/form-elements/button/Button.js';
import { Select } from '#components/form-elements/select/index.js';

const meta: Meta<typeof Select> = {
  title: 'Form Elements/Select',
  component: Select,
  args: {
    label: 'Sort by',
    labelProps: { isPageHeading: true },
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option>Choose location</Select.Option>
      <Select.Option value="eastmidlands">East Midlands</Select.Option>
      <Select.Option value="eastofengland">East of England</Select.Option>
      <Select.Option value="london">London</Select.Option>
      <Select.Option value="northeast">North East</Select.Option>
      <Select.Option value="northwest">North West</Select.Option>
      <Select.Option value="southeast">South East</Select.Option>
      <Select.Option value="southwest">South West</Select.Option>
      <Select.Option value="westmidlands">West Midlands</Select.Option>
      <Select.Option value="yorkshire">Yorkshire and the Humber</Select.Option>
    </Select>
  ),
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Standard: Story = {
  render: (args) => (
    <Select {...args}>
      <Select.Option value="published">Recently published</Select.Option>
      <Select.Option value="updated">Recently updated</Select.Option>
      <Select.Option value="views">Most view</Select.Option>
      <Select.Option value="comments">Most comments</Select.Option>
    </Select>
  ),
};

export const SelectWithHintText: Story = {
  args: {
    hint: 'This can be different to where you went before',
  },
};

export const SelectWithError: Story = {
  args: {
    error: 'Select a location',
  },
};

export const SelectWithErrorAndHintText: Story = {
  args: {
    hint: 'This can be different to where you went before',
    error: 'Select a location',
  },
};

export const SelectWithButton: Story = {
  args: {
    formGroupProps: {
      afterInput: () => (
        <Button secondary small>
          Search
        </Button>
      ),
    },
  },
};

export const SelectWithButtonAndError: Story = {
  args: {
    error: 'Select a location',
    formGroupProps: {
      afterInput: () => (
        <Button secondary small>
          Search
        </Button>
      ),
    },
  },
};
