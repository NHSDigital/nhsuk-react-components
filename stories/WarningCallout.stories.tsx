/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { WarningCallout } from '../src';

const stories = storiesOf('Warning Callout', module);

stories
  .add('Standard', () => (
    <WarningCallout label="School, nursery or work">
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ))
  .add('Without label', () => (
    <WarningCallout>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ));
