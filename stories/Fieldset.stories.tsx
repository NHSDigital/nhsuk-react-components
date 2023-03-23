import React from 'react';
import { Fieldset } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  args: {
    children: 'What is your address?',
  },
};
export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Standard: Story = {};

export const AsAPageHeading: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSize: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};
