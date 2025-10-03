import { type Meta, type StoryObj } from '@storybook/react';
import { Fieldset, TextInput } from 'nhsuk-react-components';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/fieldset" target="_blank" rel="noopener noreferrer">here</a>.
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
 *             <Fieldset.Legend size="l">What is your address?</Fieldset.Legend>
 *         </Fieldset>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof Fieldset> = {
  title: 'Form Elements/Fieldset',
  component: Fieldset,
};
export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Standard: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend size="l">What is your address?</Fieldset.Legend>
      <TextInput
        label="Address line 1"
        id="address-line-1"
        name="addressLine1"
        autoComplete="address-line1"
      />
      <TextInput
        label="Address line 2 (optional)"
        id="address-line-2"
        name="addressLine2"
        autoComplete="address-line2"
      />
      <TextInput
        label="Town or city"
        id="address-town"
        name="addressTown"
        autoComplete="address-level2"
        className="nhsuk-u-width-two-thirds"
      />
      <TextInput
        label="Postcode"
        id="address-postcode"
        name="addressPostcode"
        autoComplete="postal-code"
        className="nhsuk-input--width-10"
      />
    </Fieldset>
  ),
};

export const WithLegendAsAPageHeading: Story = {
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeS: Story = {
  name: 'With Bold Text (S)',
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend size="s">What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeM: Story = {
  name: 'With Custom Size (M)',
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeL: Story = {
  name: 'With Custom Size (L)',
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend size="l">What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeXL: Story = {
  name: 'With Custom Size (XL)',
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend size="xl">What is your address?</Fieldset.Legend>
    </Fieldset>
  ),
};
