/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { SkipLink, Hint } from '../src';

const stories = storiesOf('Skip Link', module);

const CodeText = props => (
  <span
    style={{
      fontFamily: 'monospace',
      marginLeft: 5,
      marginRight: 5,
      fontSize: 14,
      padding: 3,
      backgroundColor: 'rgba(255, 0, 0, 0.15)',
      borderRadius: 5,
    }}
    {...props}
  />
);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <>
      <Hint>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </Hint>
      <SkipLink />
    </>
  ))
  .add('With default behaviour disabled', () => (
    <>
      <Hint>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </Hint>
      <SkipLink disableDefaultBehaviour />
    </>
  ));
