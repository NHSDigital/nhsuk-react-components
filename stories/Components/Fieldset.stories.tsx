import React from 'react';
import { Fieldset } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `Fieldset` component has one subcomponent: `Fieldset.Legend`.
 *
 * The `Fieldset.Legend` component has one default prop: `headingLevel: 'h1'`. This can be overridden and any valid heading level can be used (i.e. `h1`, `h2`).
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { Fieldset } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <Fieldset>
 *             <Fieldset.Legend>What is your address?</Fieldset.Legend>
 *         </Fieldset>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  args: {
    children: 'What is your address?',
  },
};
export default meta;
type Story = StoryObj<typeof Fieldset>;

Fieldset.Legend.displayName = 'Fieldset.Legend';

export const Standard: Story = {};

export const AsAPageHeading: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSize: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};
