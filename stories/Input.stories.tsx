/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line
import { Button, ErrorMessage, Form, FormGroup, Hint, Input, Label } from '../src';
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';

import centered from '@storybook/addon-centered';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';

/* eslint-disable import/no-extraneous-dependencies */

const stories = storiesOf('Input', module);

interface Props {
  disableErrorFromComponents?: boolean;
}

const ExampleForm: FunctionComponent<Props> = props => {
  const { disableErrorFromComponents } = props;
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
        type="text"
        aria-label="First name input"
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        error={firstNameError}
        width="10"
      >
        First Name
      </Input>

      <Input
        className="nhsuk-u-margin-bottom-3"
        label="middle name"
        type="text"
        aria-label="middle name input"
        value={middleName}
        onChange={e => setMiddleName(e.currentTarget.value)}
        error={middleNameError}
        width="10"
      >
        Middle name
      </Input>

      <Input
        className="nhsuk-u-margin-bottom-3"
        label="Last name"
        type="text"
        aria-label="Last name input"
        value={lastName}
        onChange={e => setLastName(e.currentTarget.value)}
        error={lastNameError}
        width="10"
      >
        Last name
      </Input>
      <Button style={{ display: 'block' }} type="submit">
        Submit
      </Button>
    </Form>
  );
};

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
    <Input
      id="input-with-error-message"
      name="test-name-3"
      label="National Insurance Number"
      error
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    />
  ))
  .add('With error (String)', () => (
    <Input
      id="input-with-error-message"
      name="test-name-3"
      label="National Insurance Number"
      error="Error message goes here"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    />
  ))
  .add('With width modifier', () => (
    <Input
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      label="National Insurance Number"
      width="10"
    />
  ))
  .add('With Form Group', () => (
    <FormGroup>
      <Input
        hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
        label="National Insurance Number"
        width="10"
      />
    </FormGroup>
  ))
  .add('With Form Group and a link', () => (
    <FormGroup>
      <Input hint="Test Hint" label="Test Label" />
      <a href="/somewhere-else">Dont have a number?</a>
    </FormGroup>
  ))
  .add('With Form Group and a label', () => (
    <FormGroup>
      <Label>Input Label</Label>
      <Input id="input-id1" />
    </FormGroup>
  ))
  .add('With Form Group and a hint', () => (
    <FormGroup>
      <Hint>This is a Hint</Hint>
      <Input id="input-id2" width="10" />
    </FormGroup>
  ))
  .add('With Form Group, label and a hint', () => (
    <FormGroup>
      <Hint>This is a Hint</Hint>
      <Label>Input Label</Label>
      <Input id="input-id3" width="10" />
    </FormGroup>
  ))
  .add('With Form Group, label, Error and a hint', () => (
    <FormGroup>
      <Hint>This is a Hint</Hint>
      <Label>Input Label</Label>
      <ErrorMessage>This is a error message</ErrorMessage>
      <Input id="input-id4" width="10" />
    </FormGroup>
  ))
  .add('Multiple Error States', () => <ExampleForm />)
  .add('Form Error State Disabled', () => <ExampleForm disableErrorFromComponents />);