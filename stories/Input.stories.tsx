/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, SyntheticEvent } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Input, Form, Button } from '../src';

const stories = storiesOf('Input', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <Input id="input-example" name="test-name" label="National Insurance Number" />
  ))
  .add('With autoComplete attribute', () => (
    <Input
      id="input-with-autocomplete-attribute"
      name="postcode"
      autoComplete="postal-code"
      label="Postcode"
    />
  ))
  .add('With hint text', () => (
    <Input
      id="input-with-hint-text"
      name="test-name-2"
      label="National Insurance Number"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    />
  ))
  .add('With error (Boolean)', () => (
    <Form>
      <Input
        id="input-with-error-message"
        name="test-name-3"
        label="National Insurance Number"
        error
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      />
    </Form>
  ))
  .add('With error (String)', () => (
    <Form>
      <Input
        id="input-with-error-message"
        name="test-name-3"
        label="National Insurance Number"
        error="Error message goes here"
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      />
    </Form>
  ))
  .add('With width modifier', () => (
    <Input
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      label="National Insurance Number"
      width="10"
    />
  ))
  .add('Multiple Error States', () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');

    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (firstNameError) {
        setFirstNameError('');
        setLastNameError('');
      } else {
        setFirstNameError('Error');
        setLastNameError('Error');
      }
    };

    return (
      <Form onSubmit={onSubmit}>
        <Input
          id="FirstnameX"
          style={{ marginBottom: 10 }}
          autoFocus
          name="first_name"
          type="string"
          aria-label="First name input"
          value={firstName || ''}
          onChange={e => setFirstName(e.currentTarget.value)}
          error={firstNameError}
          autoComplete={process.env.NODE_ENV === 'development' ? '' : undefined}
          width="10"
        >
          First Name
        </Input>
        <Input
          style={{ marginBottom: 10 }}
          autoFocus
          label="Last name"
          name="last_name"
          type="string"
          aria-label="Last name input"
          value={lastName || ''}
          onChange={e => setLastName(e.currentTarget.value)}
          error={lastNameError}
          autoComplete={process.env.NODE_ENV === 'development' ? '' : undefined}
          width="10"
        >
          Last name
        </Input>

        <Button type="submit">Submit</Button>
      </Form>
    );
  });
