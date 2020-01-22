/* eslint-disable import/no-extraneous-dependencies */
import React, { MouseEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea, Form, Button, Input } from '../src';

const stories = storiesOf('Textarea', module);

stories
  .add('Standard', () => (
    <Textarea
      label="Can you provide more detail?"
      hint="Don&#39;t include personal or financial information, eg your National Insurance number or credit card details."
      id="more-detail"
      name="more-detail"
      rows={5}
    ></Textarea>
  ))
  .add('With autoComplete attribute', () => (
    <Textarea
      label="Full address"
      id="textarea-with-autocomplete-attribute"
      name="address"
      rows={5}
      autoComplete="street-address"
    ></Textarea>
  ))
  .add('With Error (Boolean)', () => {
    const [error, setError] = useState<boolean>(true);

    return (
      <>
        <Form>
          <Textarea
            error={error}
            id="no-ni-reason"
            name="no-ni-reason"
            rows={5}
            label="Why can&#39;t you provide a National Insurance number?"
          ></Textarea>
        </Form>
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
  .add('With Error (String)', () => {
    const [error, setError] = useState<string>('You must provide an explanation');
    return (
      <>
        <Form>
          <Textarea
            error={error}
            id="no-ni-reason"
            name="no-ni-reason"
            rows={5}
            label="Why can&#39;t you provide a National Insurance number?"
          ></Textarea>
        </Form>
        <Input onChange={e => setError(e.currentTarget.value)} value={error} />
      </>
    );
  });
