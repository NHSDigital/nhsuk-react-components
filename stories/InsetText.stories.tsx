/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { InsetText } from '../src';

const stories = storiesOf('Inset Text', module);

stories
  .add('Standard', () => (
    <InsetText>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ))
  .add('With Custom Hidden Text', () => (
    <InsetText visuallyHiddenText="Hidden Text: ">
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ))
  .add('With Disabled Hidden Text', () => (
    <InsetText visuallyHiddenText={false}>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ));
