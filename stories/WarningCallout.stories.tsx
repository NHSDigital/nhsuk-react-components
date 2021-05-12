import React from 'react';
import { WarningCallout } from '../src';

export const StandardWarningCallout = (): JSX.Element => (
  <WarningCallout>
    <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);
StandardWarningCallout.storyName = 'WarningCallout';

export const WarningCalloutWithCustomVisuallyHiddenText = (): JSX.Element => (
  <WarningCallout>
    <WarningCallout.Label visuallyHiddenText="Not Important: ">
      School, nursery or work
    </WarningCallout.Label>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export const WarningCalloutWithDisabledVisuallyHiddenText = (): JSX.Element => (
  <WarningCallout>
    <WarningCallout.Label visuallyHiddenText={false}>School, nursery or work</WarningCallout.Label>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export const WarningCalloutWithoutLabel = (): JSX.Element => (
  <WarningCallout>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export default {
  title: 'Components/WarningCallout',
  component: WarningCallout,
};
