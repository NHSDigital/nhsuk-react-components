/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { WarningCallout } from '../src';

const stories = storiesOf('Warning Callout', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <WarningCallout>
      <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ))
  .add('With Custom Visually Hidden Text', () => (
    <WarningCallout>
      <WarningCallout.Label visuallyHiddenText="Not Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ))
  .add('With Disabled Visually Hidden Text', () => (
    <WarningCallout>
      <WarningCallout.Label visuallyHiddenText={false}>
        School, nursery or work
      </WarningCallout.Label>
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
