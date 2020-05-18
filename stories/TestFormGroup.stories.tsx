/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Textarea, Fieldset } from '../src';
import { Button } from '../src/components/button';

const stories = storiesOf('TestFormGroup', module);

stories.addDecorator(centered).add('Standard', () => {
  const [error, setError] = useState<boolean>(false);
  return (
    <>
      <Fieldset>
        <Textarea label="Hello" error={error ? 'Oops!' : undefined} />
        <Textarea label="Hello" error={error ? 'Oopsie!' : undefined} />
      </Fieldset>
      <Button onClick={() => setError(!error)}>Toggle Error</Button>
    </>
  );
});
