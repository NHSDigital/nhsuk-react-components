import type { Story } from '@storybook/react';
import React from 'react';
import { Input } from '../src';

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

export const InputWithBooleanError = StandardInput.bind({});
InputWithBooleanError.args = {
  id: 'input-with-boolean-error',
  name: 'test-name-3',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  error: true,
};
InputWithBooleanError.argTypes = { error: { type: { name: 'boolean' } } };

export const InputWithStringError = StandardInput.bind({});
InputWithStringError.args = {
  id: 'input-with-string-error',
  name: 'test-name-4',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  error: 'Error message goes here',
};

export const InputWithWidth = StandardInput.bind({});
InputWithWidth.args = {
  id: 'input-with-width',
  name: 'test-name-5',
  label: 'National Insurance Number',
  hint: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.',
  width: '10',
};

// export const WithWidthModifier = (): JSX.Element => (
//   <Input
//     hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
//     label="National Insurance Number"
//     width={10}
//   />
// );

// export const WithFormGroup = (): JSX.Element => (
//   <FormGroup>
//     <Input
//       hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
//       label="National Insurance Number"
//       error="TestError"
//       width="10"
//     />
//   </FormGroup>
// );
// WithFormGroup.storyName = 'With Form Group';

// export const WithFormGroupAndLink = (): JSX.Element => (
//   <FormGroup>
//     <Input hint="Test Hint" label="Test Label" />
//     <a href="/somewhere-else">Dont have a number?</a>
//   </FormGroup>
// );
// WithFormGroupAndLink.storyName = 'With Form Group and a link';

// export const WithFormGroupAndLabel = (): JSX.Element => (
//   <FormGroup>
//     <Label>Input Label</Label>
//     <Input id="input-id1" />
//   </FormGroup>
// );
// WithFormGroupAndLabel.storyName = 'With Form Group and a Label';

// export const WithFormGroupAndHint = (): JSX.Element => (
//   <FormGroup>
//     <Hint>This is a Hint</Hint>
//     <Input id="input-id2" width="10" />
//   </FormGroup>
// );
// WithFormGroupAndHint.storyName = 'With Form Group and Hint';

// export const WithFormGroupHintAndLabel = (): JSX.Element => (
//   <FormGroup>
//     <Hint>This is a Hint</Hint>
//     <Label>Input Label</Label>
//     <Input id="input-id3" width="10" />
//   </FormGroup>
// );
// WithFormGroupHintAndLabel.storyName = 'With Form Group, Hint and Label';

// export const WithFormGroupErrorHintAndLabel = (): JSX.Element => (
//   <FormGroup>
//     <Label>Input Label</Label>
//     <Hint>This is a Hint</Hint>
//     <ErrorMessage>This is a error message</ErrorMessage>
//     <Input id="input-id4" width="10" />
//   </FormGroup>
// );
// WithFormGroupErrorHintAndLabel.storyName = 'With Form Group Error, Hint and Label';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { type: { name: 'string' } },
    hint: { type: { name: 'string' } },
    error: { type: { name: 'string' } },
  },
};
