import { Story } from '@storybook/react';
import React from 'react';
import { ErrorMessage, FormGroup, Hint, Label, Select } from '../../src';

export const Standard: Story = (args) => (
  <Select {...args}>
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2" selected>
      NHS.UK frontend option 2
    </option>
    <option value="3" disabled>
      NHS.UK frontend option 3
    </option>
  </Select>
);
Standard.args = {
  id: 'select-1',
  label: 'Label text goes here',
};

export const SelectWithHintText: Story = (args) => (
  <Select {...args}>
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2">NHS.UK frontend option 2</option>
    <option value="3">NHS.UK frontend option 3</option>
  </Select>
);
SelectWithHintText.args = {
  id: 'select-2',
  label: 'Label text goes here',
  hint: 'Hint text goes here',
};

export const SelectWithErrorBoolean: Story = (args) => (
  <Select {...args}>
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2">NHS.UK frontend option 2</option>
    <option value="3">NHS.UK frontend option 3</option>
  </Select>
);
SelectWithErrorBoolean.storyName = 'Select With Error (Boolean)';
SelectWithErrorBoolean.argTypes = { error: { type: { name: 'boolean' } } };
SelectWithErrorBoolean.args = { error: true, label: 'Label text goes here' };

export const SelectWithErrorString: Story = (args) => (
  <Select {...args}>
    <option value="1">NHS.UK frontend option 1</option>
    <option value="2">NHS.UK frontend option 2</option>
    <option value="3">NHS.UK frontend option 3</option>
  </Select>
);
SelectWithErrorString.storyName = 'Select With Error (String)';
SelectWithErrorString.args = { error: 'Error message goes here', label: 'Label text goes here' };

export const SelectUsingFormGroup: Story = ({ label, hint, error, ...rest }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {hint && <Hint>{hint}</Hint>}
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <Select {...rest}>
      <option>Select</option>
      <option value="1">NHS.UK frontend option 1</option>
      <option value="2">NHS.UK frontend option 2</option>
      <option value="3">NHS.UK frontend option 3</option>
    </Select>
  </FormGroup>
);
SelectUsingFormGroup.storyName = 'Select Using FormGroup';
SelectUsingFormGroup.args = {
  id: 'select-form-group',
  label: 'Label text goes here',
  hint: 'Hint text goes here',
  error: 'Please select an option',
};

export default {
  title: 'Forms/Select',
  component: Select,
  argTypes: {
    label: { type: { name: 'string' } },
    hint: { type: { name: 'string' } },
    error: { type: { name: 'string' } },
  },
};
