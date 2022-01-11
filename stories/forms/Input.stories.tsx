import type { Story } from '@storybook/react';
import React from 'react';
import { ErrorMessage, FormGroup, Hint, Input, Label } from '../../src';

export const StandardInput: Story = (args) => <Input {...args} />;
StandardInput.args = {
  id: 'input-example',
  name: 'test-name',
  label: 'National Insurance Number',
};

export const InputWithHintText = StandardInput.bind({});
InputWithHintText.args = {
  id: 'input-with-hint-text',
  name: 'test-name-2',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
};
InputWithHintText.storyName = 'Hint';

export const InputWithBooleanError = StandardInput.bind({});
InputWithBooleanError.args = {
  id: 'input-with-boolean-error',
  name: 'test-name-3',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  error: true,
};
InputWithBooleanError.argTypes = { error: { type: { name: 'boolean' } } };
InputWithBooleanError.storyName = 'Error (boolean)';

export const InputWithStringError = StandardInput.bind({});
InputWithStringError.args = {
  id: 'input-with-string-error',
  name: 'test-name-4',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  error: 'Error message goes here',
};
InputWithStringError.storyName = 'Error (string)';

export const WidthModifier = StandardInput.bind({});
WidthModifier.args = {
  id: 'input-with-width',
  name: 'test-name-5',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  width: '10',
};

export const InputWithFormGroup: Story = ({ label, hint, error, ...args }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {hint && <Hint>{hint}</Hint>}
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <Input id="ni-number" {...args} />
  </FormGroup>
);
InputWithFormGroup.args = {
  id: 'ni-number',
  name: 'test-name-6',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  error: 'Error message goes here',
};
InputWithFormGroup.storyName = 'Using FormGroup';

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    label: { type: { name: 'string' } },
    hint: { type: { name: 'string' } },
    error: { type: { name: 'string' } },
  },
};
