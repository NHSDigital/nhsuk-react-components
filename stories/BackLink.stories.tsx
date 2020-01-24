/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { BackLink } from '../src';

const stories = storiesOf('BackLink', module);

stories.addDecorator(centered).add('BackLink', () => <BackLink>Link</BackLink>);
