import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '#components/form-elements/button/Button.js';
import { Select } from '#components/form-elements/select/index.js';

const meta: Meta<typeof Select> = {
  title: 'Form Elements/Select',
  component: Select,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the select component and when to use it, visit the [design system in
          the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/select) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
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

export const Default: Story = {
  name: 'Select default',
  render: (args) => (
    <Select {...args}>
      <Select.Option value="published">Recently published</Select.Option>
      <Select.Option value="updated">Recently updated</Select.Option>
      <Select.Option value="views">Most view</Select.Option>
      <Select.Option value="comments">Most comments</Select.Option>
    </Select>
  ),
};

export const SelectWithHint: Story = {
  name: 'Select with hint',
  args: {
    hint: 'This can be different to where you went before',
  },
};

export const SelectWithError: Story = {
  name: 'Select with error message',
  args: {
    error: 'Select a location',
  },
};

export const SelectWithErrorAndHint: Story = {
  name: 'Select with error message and hint',
  args: {
    hint: 'This can be different to where you went before',
    error: 'Select a location',
  },
};

export const SelectWithDivider: Story = {
  name: 'Select with divider',
  render: (args) => (
    <Select {...args}>
      <Select.Option value="first-name-ascending">First name (A to Z)</Select.Option>
      <Select.Option value="first-name-descending">First name (Z to A)</Select.Option>
      <Select.Divider />
      <Select.Option value="last-name-ascending">Last name (A to Z)</Select.Option>
      <Select.Option value="last-name-descending">Last name (Z to A)</Select.Option>
    </Select>
  ),
};

export const SelectWithButton: Story = {
  name: 'Select with button',
  args: {
    formGroupProps: {
      afterInput: (
        <Button secondary small>
          Search
        </Button>
      ),
    },
  },
};

export const SelectWithButtonAndError: Story = {
  name: 'Select with button and error message',
  args: {
    error: 'Select a location',
    formGroupProps: {
      afterInput: (
        <Button secondary small>
          Search
        </Button>
      ),
    },
  },
};
