/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Form } from '../src';

const stories = storiesOf('Input', module);

stories
  .add('Standard', () => (
    <Input id="input-example" name="test-name">
      National Insurance Number
    </Input>
  ))
  .add('With autoComplete attribute', () => (
    <Input id="input-with-autocomplete-attribute" name="postcode" autoComplete="postal-code">
      Postcode
    </Input>
  ))
  .add('With hint text', () => (
    <Input
      id="input-with-hint-text"
      name="test-name-2"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    >
      National Insurance Number
    </Input>
  ))
  .add('With error (Boolean)', () => (
    <Form>
      <Input
        id="input-with-error-message"
        name="test-name-3"
        error
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      >
        National Insurance Number
      </Input>
    </Form>
  ))
  .add('With error (String)', () => (
    <Form>
      <Input
        id="input-with-error-message"
        name="test-name-3"
        error="Error message goes here"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      >
        National Insurance Number
      </Input>
    </Form>
  ))
  .add('With width modifier', () => (
    <Input
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      width="10"
    >
      National Insurance Number
    </Input>
  ));
