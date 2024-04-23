import React from 'react';
import { WarningCallout } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WarningCallout> = {
  title: 'Content Presentation/WarningCallout',
  component: WarningCallout,
};
export default meta;
type Story = StoryObj<typeof WarningCallout>;

WarningCallout.Label.displayName = 'WarningCallout.Label';

export const StandardWarningCallout: Story = {
  render: (args) => (
    <WarningCallout>
      <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),

  name: 'WarningCallout',
};

export const WarningCalloutWithCustomVisuallyHiddenText: Story = {
  render: (args) => (
    <WarningCallout>
      <WarningCallout.Label visuallyHiddenText="Not Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),
};

export const WarningCalloutWithDisabledVisuallyHiddenText: Story = {
  render: (args) => (
    <WarningCallout>
      <WarningCallout.Label visuallyHiddenText={false}>
        School, nursery or work
      </WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),
};

export const WarningCalloutWithoutLabel: Story = {
  render: (args) => (
    <WarningCallout>
      <p>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),
};
