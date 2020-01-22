/* eslint-disable import/no-extraneous-dependencies */
import React, { MouseEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { Radios, Form, Fieldset, Hint, Button, Input } from '../src';

const stories = storiesOf('Radios', module);

stories
  .add('Standard', () => (
    <Form>
      <Fieldset>
        <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
        <Hint>This includes charging your last name or spelling your name differently.</Hint>
        <Radios name="example">
          <Radios.Radio id="example-1" value="yes">
            Yes
          </Radios.Radio>
          <Radios.Radio id="example-2" value="no" checked>
            No
          </Radios.Radio>
        </Radios>
      </Fieldset>
    </Form>
  ))
  .add('Inline', () => (
    <Form>
      <Fieldset>
        <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
        <Hint>This includes charging your last name or spelling your name differently.</Hint>
        <Radios name="example" inline>
          <Radios.Radio id="example-1" value="yes">
            Yes
          </Radios.Radio>
          <Radios.Radio id="example-2" value="no" checked>
            No
          </Radios.Radio>
        </Radios>
      </Fieldset>
    </Form>
  ))
  .add('Disabled', () => (
    <Form>
      <Fieldset>
        <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
        <Hint>This includes charging your last name or spelling your name differently.</Hint>
        <Radios name="example">
          <Radios.Radio disabled id="example-1" value="yes">
            Yes
          </Radios.Radio>
          <Radios.Radio disabled id="example-2" value="no">
            No
          </Radios.Radio>
        </Radios>
      </Fieldset>
    </Form>
  ))
  .add('With a divider', () => (
    <Form>
      <Fieldset>
        <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
        <Radios name="example" id="example-divider">
          <Radios.Radio value="government-gateway">Use Government Gateway</Radios.Radio>
          <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
          <Radios.Divider>or</Radios.Divider>
          <Radios.Radio value="create-account">Create an account</Radios.Radio>
        </Radios>
      </Fieldset>
    </Form>
  ))
  .add('With hint on items', () => (
    <Form>
      <Fieldset>
        <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
        <Radios name="example" id="example-divider">
          <Radios.Radio
            value="government-gateway"
            hint="You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before."
          >
            Use Government Gateway
          </Radios.Radio>
          <Radios.Radio
            value="nhsuk-login"
            hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
          >
            Use NHS.UK login
          </Radios.Radio>
        </Radios>
      </Fieldset>
    </Form>
  ))
  .add('Without Fieldset', () => (
    <Form>
      <Radios name="colours" id="colours">
        <Radios.Radio value="red">Red</Radios.Radio>
        <Radios.Radio value="green">Green</Radios.Radio>
        <Radios.Radio value="blue">Blue</Radios.Radio>
      </Radios>
    </Form>
  ))
  .add('With Error (Boolean)', () => {
    const [error, setError] = React.useState<boolean>(true);
    return (
      <>
        <Form>
          <Fieldset>
            <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
            <Hint>This includes charging your last name or spelling your name differently.</Hint>
            <Radios name="example" error={error}>
              <Radios.Radio id="example-1" value="yes">
                Yes
              </Radios.Radio>
              <Radios.Radio id="example-2" value="no" checked>
                No
              </Radios.Radio>
            </Radios>
          </Fieldset>
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
    const [error, setError] = React.useState('Please select an option');
    return (
      <>
        <Form>
          <Fieldset>
            <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
            <Hint>This includes charging your last name or spelling your name differently.</Hint>
            <Radios name="example" error={error}>
              <Radios.Radio id="example-1" value="yes">
                Yes
              </Radios.Radio>
              <Radios.Radio id="example-2" value="no" checked>
                No
              </Radios.Radio>
            </Radios>
          </Fieldset>
        </Form>
        <Input value={error} onChange={e => setError(e.currentTarget.value)}></Input>
      </>
    );
  });
