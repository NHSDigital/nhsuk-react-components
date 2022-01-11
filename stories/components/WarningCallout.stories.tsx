import { Story } from '@storybook/react';
import React from 'react';
import { WarningCallout } from '../../src';

export const StandardWarningCallout: Story = (args) => (
  <WarningCallout {...args}>
    <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);
StandardWarningCallout.storyName = 'WarningCallout';

export const WarningCalloutWithCustomVisuallyHiddenText: Story = (args) => (
  <WarningCallout {...args}>
    <WarningCallout.Label visuallyHiddenText="Not Important: ">
      School, nursery or work
    </WarningCallout.Label>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export const WarningCalloutWithDisabledVisuallyHiddenText: Story = (args) => (
  <WarningCallout {...args}>
    <WarningCallout.Label visuallyHiddenText={false}>School, nursery or work</WarningCallout.Label>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </WarningCallout>
);

export const WarningCalloutWithoutLabel: Story = (args) => (
  <WarningCallout {...args}>
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
