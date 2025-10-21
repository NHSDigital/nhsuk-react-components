import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Fieldset, TextInput } from '#components';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/fieldset" target="_blank" rel="noopener noreferrer">here</a>.
 */
const meta: Meta<typeof Fieldset> = {
  title: 'Form Elements/Fieldset',
  component: Fieldset,
};
export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Standard: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="l">
        What is your address?
      </Fieldset.Legend>
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

export const WithCustomLegendSizeS: Story = {
  name: 'With Bold Text (S)',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="s">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeM: Story = {
  name: 'With Custom Size (M)',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="m">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeL: Story = {
  name: 'With Custom Size (L)',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="l">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeXL: Story = {
  name: 'With Custom Size (XL)',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="xl">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};
