/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, SyntheticEvent } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Input, Form, Button } from '../src';

const stories = storiesOf('Input', module);

const form = (disableErrorFromComponents: boolean) => (
  () => {
    const [firstName, setFirstName] = useState<string>('');
    const [middleName, setMiddleName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [middleNameError, setMiddleNameError] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');

    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFirstNameError(firstName.length === 0 ? 'You must enter a first name' : null);
      setMiddleNameError(middleName.length === 0 ? 'You must enter a middle name' : null);
      setLastNameError(lastName.length === 0 ? 'You must enter a last name' : null);
    };

    return (
      <Form onSubmit={onSubmit} disableErrorFromComponents={disableErrorFromComponents}>
        <Input
          className="nhsuk-u-margin-bottom-3"
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
          className="nhsuk-u-margin-bottom-3"
          label="middle name"
          name="middle_name"
          type="string"
          aria-label="middle name input"
          value={middleName || ''}
          onChange={e => setMiddleName(e.currentTarget.value)}
          error={middleNameError}
          autoComplete={process.env.NODE_ENV === 'development' ? '' : undefined}
          width="10"
        >
          Middle name
        </Input>

        <Input
          className="nhsuk-u-margin-bottom-3"
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
        <Button style={{ display: 'block' }} type="submit">Submit</Button>
      </Form>
    );
  }
);

stories
  .addDecorator(centered)
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
  ))
  .add('Multiple Error States', form(false))
  .add('Form Error State Disabled', form(true));
