import { Story } from '@storybook/react';
import React from 'react';
import { Fieldset } from '../../src';

export const Standard: Story = (args) => (
  <Fieldset {...args}>
    <Fieldset.Legend>What is your address?</Fieldset.Legend>
  </Fieldset>
);

export const AsAPageHeading: Story = (args) => (
  <Fieldset {...args}>
    <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
  </Fieldset>
);

export const WithCustomLegendSize: Story = (args) => (
  <Fieldset {...args}>
    <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
  </Fieldset>
);

export default {
  title: 'Forms/Fieldset',
  component: Fieldset,
  subcomponents: { 'Fieldset.Legend': Fieldset.Legend },
};
