import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Input } from '../src';

const stories = storiesOf('TestFormGroup', module);

stories.addDecorator(centered).add('Standard', () => <Input hint="test" label="NHS Number" />);
