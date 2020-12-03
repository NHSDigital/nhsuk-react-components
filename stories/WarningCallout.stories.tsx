import React from 'react';
import { WarningCallout } from '../src';

export const Standard = () => (
  <WarningCallout label="School, nursery or work">
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is
      usually 5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export const WarningCalloutWithoutLabel = () => (
  <WarningCallout>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is
      usually 5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export default {
  title: 'Components/WarningCallout',
  component: WarningCallout,
};
