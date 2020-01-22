/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActionLink } from '../src';

const stories = storiesOf('ActionLink', module);

stories.add('ActionLink', () => <ActionLink>Link</ActionLink>);
