import React, { useState, MouseEvent } from 'react';
import { Select, Button, TextInput } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Form Elements/Select',
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Standard: Story = {
  render: (args) => (
    <Select label="Label text goes here" labelProps={{ size: 'l' }}>
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2" selected>
        NHS.UK frontend option 2
      </Select.Option>
      <Select.Option value="3" disabled>
        NHS.UK frontend option 3
      </Select.Option>
    </Select>
  ),
};

export const SelectWithHintText: Story = {
  render: (args) => (
    <Select label="Label text goes here" labelProps={{ size: 'l' }} hint="Hint text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
    </Select>
  ),
};

export const SelectWithErrorBoolean: Story = {
  render: function SelectWithErrorBooleanRender() {
    const [error, setError] = useState<boolean>(true);
    return (
      <>
        <Select label="Label text goes here" labelProps={{ size: 'l' }} error={error}>
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  },

  name: 'Select With Error (Boolean)',
};

export const SelectWithErrorString: Story = {
  render: function SelectWithErrorStringRender() {
    const [error, setError] = useState<string>('Error message goes here');
    return (
      <>
        <Select label="Label text goes here" labelProps={{ size: 'l' }} error={error}>
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

export const SelectWithErrorAndHintString: Story = {
  render: function SelectWithErrorAndHintStringRender() {
    const [error, setError] = useState<string>('Error message goes here');
    return (
      <>
        <Select
          label="Label text goes here"
          labelProps={{ size: 'l' }}
          hint="Hint text goes here"
          error={error}
        >
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
