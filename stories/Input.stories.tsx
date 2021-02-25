import React from 'react';
import { Input } from '../src';

export const Standard = () => (
  <Input
    id="input-example"
    name="test-name"
    label="National Insurance Number"
  />
);

export const WithHintText = () => (
  <Input
    id="input-with-hint-text"
    name="test-name-2"
    label="National Insurance Number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  />
);

export const WithErrorBoolean = () => (
  <Input
    id="input-with-error-message"
    name="test-name-3"
    label="National Insurance Number"
    error
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  />
);
WithErrorBoolean.storyName = 'With Error (Boolean)';

export const WithErrorString = () => (
  <Input
    id="input-with-error-message"
    name="test-name-3"
    label="National Insurance Number"
    error="Error message goes here"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  />
);
WithErrorString.storyName = 'With Error (String)';

export const WithWidthModifier = () => (
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
