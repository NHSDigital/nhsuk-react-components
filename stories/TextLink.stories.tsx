/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import { TextLink } from '../src';

const stories = storiesOf('TextLink', module);

stories.addDecorator(centered)
  .add('TextLink', () => <TextLink href="/#TextLink">Text Link</TextLink>);
