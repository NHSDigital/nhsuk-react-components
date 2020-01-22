/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fieldset } from '../src';

const stories = storiesOf('Fieldset', module);

stories
  .add('Standard', () => (
    <Fieldset>
      <Fieldset.Legend>What is your address?</Fieldset.Legend>
    </Fieldset>
  ))
  .add('As Page Heading', () => (
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
    </Fieldset>
  ));
