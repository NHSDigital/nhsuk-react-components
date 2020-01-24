/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import { ActionLink } from '../src';

const stories = storiesOf('ActionLink', module);

stories.addDecorator(centered).add('ActionLink', () => <ActionLink>Link</ActionLink>);
