/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Fieldset } from '../src';

const stories = storiesOf('Fieldset', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <Fieldset>
      <Fieldset.Legend>What is your address?</Fieldset.Legend>
    </Fieldset>
  ))
  .add('As Page Heading', () => (
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
    </Fieldset>
  ))
  .add('With Size', () => (
    <Fieldset>
      <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
    </Fieldset>
  ));
