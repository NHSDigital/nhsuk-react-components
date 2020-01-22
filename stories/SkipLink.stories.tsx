/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { SkipLink } from '../src';

const stories = storiesOf('Skip Link', module);

stories
  .add('Standard', () => <SkipLink />)
  .add('With default behaviour disabled', () => <SkipLink disableDefaultBehaviour />);
