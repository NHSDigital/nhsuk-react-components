/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorMessage } from '../src';

const stories = storiesOf('Error Message', module);

stories
  .add('Standard', () => <ErrorMessage>Error message about full name goes here</ErrorMessage>)
  .add('No Visually Hidden Text', () => (
    <ErrorMessage visuallyHiddenText={false}>Error message about full name goes here</ErrorMessage>
  ))
  .add('Custom Visually Hidden Text', () => (
    <ErrorMessage visuallyHiddenText="Custom Text">
      Error message about full name goes here
    </ErrorMessage>
  ));
