import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Fieldset } from '#components/form-elements/fieldset/index.js';
import { TextInput } from '#components/form-elements/text-input/index.js';

const meta: Meta<typeof Fieldset> = {
  title: 'Form Elements/Fieldset',
  component: Fieldset,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the fieldset component and when to use it, visit the [design system in
          the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/fieldset) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  name: 'Fieldset default',
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
  name: 'Fieldset with size S legend',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="s">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeM: Story = {
  name: 'Fieldset with size M legend',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="m">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeL: Story = {
  name: 'Fieldset with size L legend',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="l">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};

export const WithCustomLegendSizeXL: Story = {
  name: 'Fieldset with size XL legend',
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading size="xl">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
  ),
};
