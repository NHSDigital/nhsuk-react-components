import React from 'react';
import { Input } from '../src';

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

export default {
  title: 'Components/Input',
  component: Input,
};
