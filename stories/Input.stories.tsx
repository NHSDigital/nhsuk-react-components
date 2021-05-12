import React from 'react';
import { ErrorMessage, FormGroup, Hint, Input, Label } from '../src';

export const Standard = (): JSX.Element => (
  <Input id="input-example" name="test-name" label="National Insurance Number" />
);

export const WithHintText = (): JSX.Element => (
  <Input
    id="input-with-hint-text"
    name="test-name-2"
    label="National Insurance Number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  />
);

export const WithErrorBoolean = (): JSX.Element => (
  <Input
    id="input-with-error-message"
    name="test-name-3"
    label="National Insurance Number"
    error
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  />
);
WithErrorBoolean.storyName = 'With Error (Boolean)';

export const WithErrorString = (): JSX.Element => (
  <Input
    id="input-with-error-message"
    name="test-name-3"
    label="National Insurance Number"
    error="Error message goes here"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  />
);
WithErrorString.storyName = 'With Error (String)';

export const WithWidthModifier = (): JSX.Element => (
  <Input
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    label="National Insurance Number"
    width={10}
  />
);

export const WithFormGroup = (): JSX.Element => (
  <FormGroup>
    <Input
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      label="National Insurance Number"
      width="10"
    />
  </FormGroup>
);
WithFormGroup.storyName = 'With Form Group';

export const WithFormGroupAndLink = (): JSX.Element => (
  <FormGroup>
    <Input hint="Test Hint" label="Test Label" />
    <a href="/somewhere-else">Dont have a number?</a>
  </FormGroup>
);
WithFormGroupAndLink.storyName = 'With Form Group and a link';

export const WithFormGroupAndLabel = (): JSX.Element => (
  <FormGroup>
    <Label>Input Label</Label>
    <Input id="input-id1" />
  </FormGroup>
);
WithFormGroupAndLabel.storyName = 'With Form Group and a Label';

export const WithFormGroupAndHint = (): JSX.Element => (
  <FormGroup>
    <Hint>This is a Hint</Hint>
    <Input id="input-id2" width="10" />
  </FormGroup>
);
WithFormGroupAndHint.storyName = 'With Form Group and Hint';

export const WithFormGroupHintAndLabel = (): JSX.Element => (
  <FormGroup>
    <Hint>This is a Hint</Hint>
    <Label>Input Label</Label>
    <Input id="input-id3" width="10" />
  </FormGroup>
);
WithFormGroupHintAndLabel.storyName = 'With Form Group, Hint and Label';

export const WithFormGroupErrorHintAndLabel = (): JSX.Element => (
  <FormGroup>
    <Hint>This is a Hint</Hint>
    <Label>Input Label</Label>
    <ErrorMessage>This is a error message</ErrorMessage>
    <Input id="input-id4" width="10" />
  </FormGroup>
);
WithFormGroupErrorHintAndLabel.storyName = 'With Form Group Error, Hint and Label';

export default {
  title: 'Components/Input',
  component: Input,
};
