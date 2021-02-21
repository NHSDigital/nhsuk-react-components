import { Button, ErrorMessage, FormGroup, Hint, Input, Label, Textarea } from '../src';
import React, { MouseEvent, useState } from 'react';

import Centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Textarea', module);

stories
  .addDecorator(Centered)
  .add('Standard', () => (
    <Textarea
      label="Can you provide more detail?"
      hint="Don&#39;t include personal or financial information, eg your National Insurance number or credit card details."
      id="more-detail"
      name="more-detail"
      rows={5}
    />
  ))
  .add('With autoComplete attribute', () => (
    <Textarea
      label="Full address"
      id="textarea-with-autocomplete-attribute"
      name="address"
      rows={5}
      autoComplete="street-address"
    />
  ))
  .add('With Error (Boolean)', () => {
    const [error, setError] = useState<boolean>(true);

    return (
      <>
        <Textarea
          error={error}
          id="no-ni-reason"
          name="no-ni-reason"
          rows={5}
          label="Why can&#39;t you provide a National Insurance number?"
        />
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  })
  .add('With Form Group (with error)', () => {
    return (
      <>
        <FormGroup>
          <Label>Please specify (others)</Label>
          <Hint>Hint: Use this box to specify more</Hint>
          <ErrorMessage>At least 20 characters...</ErrorMessage>
          <Textarea
            id="no-ni-reason2"
            name="no-ni-reason2"
            rows={5}
            label="Why can&#39;t you provide a National Insurance number?"
          />
        </FormGroup>
      </>
    );
  })
  .add('With Form Group', () => {
    return (
      <>
        <FormGroup>
          <Label>Please specify (others)</Label>
          <Hint>Hint: Use this box to specify more</Hint>
          <Textarea
            id="no-ni-reason2"
            name="no-ni-reason2"
            rows={5}
            label="Why can&#39;t you provide a National Insurance number?"
          />
        </FormGroup>
      </>
    );
  })
  .add('With Error (String)', () => {
    const [error, setError] = useState<string>('You must provide an explanation');
    return (
      <>
        <Textarea
          error={error}
          id="no-ni-reason"
          name="no-ni-reason"
          rows={5}
          label="Why can&#39;t you provide a National Insurance number?"
        />
        <Input onChange={e => setError(e.currentTarget.value)} value={error} />
      </>
    );
  });
