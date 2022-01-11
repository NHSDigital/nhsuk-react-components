import { Story } from '@storybook/react';
import React from 'react';
import { ErrorMessage, FormGroup, Hint, Label, Textarea } from '../../src';

export const Standard: Story = (args) => <Textarea {...args} />;
Standard.args = {
  id: 'more-detail',
  name: 'more-detail',
  label: 'Can you provide more detail?',
  hint: "Don't include personal or financial information, eg your National Insurance number or credit card details.",
  rows: 5,
};

export const TextareaWithAutoCompleteAttribute: Story = (args) => <Textarea {...args} />;
TextareaWithAutoCompleteAttribute.args = {
  label: 'Full address',
  id: 'textarea-with-autocomplete-attribute',
  name: 'address',
  rows: 5,
  autoComplete: 'street-address',
};

export const TextareaWithErrorBoolean: Story = (args) => <Textarea {...args} />;
TextareaWithErrorBoolean.storyName = 'Textarea With Error (Boolean)';
TextareaWithErrorBoolean.argTypes = { error: { type: { name: 'boolean' } } };
TextareaWithErrorBoolean.args = {
  error: true,
  id: 'no-ni-reason',
  name: 'no-ni-reason',
  rows: 5,
  label: "Why can't you provide a National Insurance number?",
};

export const TextareaWithErrorString: Story = (args) => <Textarea {...args} />;
TextareaWithErrorString.storyName = 'Textarea With Error (String)';
TextareaWithErrorString.args = {
  error: 'You must provide an explanation',
  id: 'no-ni-reason',
  name: 'no-ni-reason',
  rows: 5,
  label: "Why can't you provide a National Insurance number?",
};

export const TextareaWithFormGroup: Story = ({ label, hint, error, ...rest }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {hint && <Hint>{hint}</Hint>}
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <Textarea {...rest} />
  </FormGroup>
);
TextareaWithFormGroup.storyName = 'Textarea using Form Group';
TextareaWithFormGroup.args = {
  id: 'no-ni-reason2',
  name: 'no-ni-reason2',
  rows: 5,
  label: 'Please specify (others)',
  hint: 'Hint: Use this box to specify more',
};

export const TextareaWithFormGroupLabelHintErrorString = TextareaWithFormGroup.bind({});
TextareaWithFormGroupLabelHintErrorString.args = {
  id: 'no-ni-reason2',
  name: 'no-ni-reason2',
  rows: 5,
  label: 'Please specify (others)',
  hint: 'Hint: Use this box to specify more',
  error: 'Please enter a value',
};

TextareaWithFormGroupLabelHintErrorString.storyName = 'Textarea using Form Group (with error)';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
};
