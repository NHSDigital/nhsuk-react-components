import React from 'react';
import { Fieldset, Checkboxes, TextInput } from '../../src';
import { Button } from '../../src/components/form-elements/button';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/checkboxes" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * For details on the new form design pattern, check the documentation for the `Form` component.
 *
 * The `Checkbox` component provides a `CheckboxContext` context, which the `Checkbox.Box` components use. When each box initially renders, it will attempt to assign itself an `id` by calling the `getBoxId` method in the context. This will assign each box a sequential ID using either the `idPrefix` or `name` supplied to the Checkbox. If neither are provided, the element will generate it's own unique identifier.
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { Checkboxes } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <Checkboxes name="nationality" id="nationality">
 *             <Checkboxes.Box value="british">British</Checkboxes.Box>
 *             <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
 *             <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
 *         </Checkboxes>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof Checkboxes> = {
  title: 'Components/Checkboxes',
  component: Checkboxes,
};
export default meta;
type Story = StoryObj<typeof Checkboxes>;

Checkboxes.Box.displayName = 'Checkboxes.Box';
Checkboxes.Divider.displayName = 'Checkboxes.Divider';

export const Standard: Story = {
  render: (args) => (
    <form>
      <Fieldset aria-describedby="nationality--hint">
        <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
        <Checkboxes
          idPrefix={args.idPrefix}
          name="nationality"
          id="nationality"
          hint="If you have more than 1 nationality, select all options that are relevant to you."
        >
          <Checkboxes.Box value="british">British</Checkboxes.Box>
          <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
          <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
        </Checkboxes>
      </Fieldset>
    </form>
  ),
};

export const WithHintText: Story = {
  render: (args) => (
    <form>
      <Fieldset>
        <Fieldset.Legend isPageHeading>How do you want to sign in?</Fieldset.Legend>
        <Checkboxes>
          <Checkboxes.Box
            id="government-gateway"
            name="gateway"
            type="checkbox"
            value="gov-gateway"
            hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
          >
            Sign in with Government Gateway
          </Checkboxes.Box>
          <Checkboxes.Box
            id="nhsuk-login"
            name="verify"
            value="nhsuk-verify"
            hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
          >
            Sign in with NHS.UK login
          </Checkboxes.Box>
        </Checkboxes>
      </Fieldset>
    </form>
  ),
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <form>
      <Checkboxes id="colours" name="colours">
        <Checkboxes.Box value="red">Red</Checkboxes.Box>
        <Checkboxes.Box value="green">Green</Checkboxes.Box>
        <Checkboxes.Box value="red" disabled>
          Blue
        </Checkboxes.Box>
      </Checkboxes>
    </form>
  ),
};

export const WithConditionalContent: Story = {
  render: (args) => (
    <form>
      <Fieldset aria-describedby="waste--hint">
        <Fieldset.Legend isPageHeading>
          Which types of waste do you transport regularly?
        </Fieldset.Legend>
        <Checkboxes id="waste" name="waste" hint="Select all that apply">
          <Checkboxes.Box conditional={<p>This includes rocks and earth.</p>} value="mines">
            Waste from mines or quarries
          </Checkboxes.Box>
        </Checkboxes>
      </Fieldset>
    </form>
  ),
};

export const WithLegendAsPageHeading: Story = {
  render: (args) => (
    <form>
      <Fieldset aria-describedby="waste--hint">
        <Fieldset.Legend isPageHeading>
          Which types of waste do you transport regularly?
        </Fieldset.Legend>
        <Checkboxes id="waste" name="waste" hint="Select all that apply">
          <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
          <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
          <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
        </Checkboxes>
      </Fieldset>
    </form>
  ),
};

export const WithExclusiveNoneOption: Story = {
  render: (args) => (
    <form>
      <Fieldset aria-describedby="symptoms--hint">
        <Fieldset.Legend isPageHeading>Do you have any of these symptoms?</Fieldset.Legend>
        <Checkboxes id="symptoms" name="symptoms" hint="Select all the symptoms you have.">
          <Checkboxes.Box value="sore-throat">Sore throat</Checkboxes.Box>
          <Checkboxes.Box value="runny-nose">Runny nose</Checkboxes.Box>
          <Checkboxes.Box value="muscle-pain">Muscle or joint pain</Checkboxes.Box>
          <Checkboxes.Divider />
          <Checkboxes.Box value="none" exclusive>
            None
          </Checkboxes.Box>
        </Checkboxes>
      </Fieldset>
    </form>
  ),
};

export const WithErrorBoolean: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errorToggle, setErrorToggle] = React.useState(true);
    return (
      <form>
        <Fieldset aria-describedby="waste-hint">
          <Fieldset.Legend isPageHeading>
            Which types of waste do you transport regularly?
          </Fieldset.Legend>
          <Checkboxes error={errorToggle} id="waste" name="waste" hint="Select all that apply">
            <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
            <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
            <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          </Checkboxes>
        </Fieldset>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setErrorToggle(!errorToggle);
          }}
        >
          Toggle Error
        </Button>
      </form>
    );
  },

  name: 'With Error (Boolean)',
};

export const WithErrorString: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = React.useState('Please select an option');
    return (
      <form>
        <Fieldset aria-describedby="waste-hint">
          <Fieldset.Legend isPageHeading>
            Which types of waste do you transport regularly?
          </Fieldset.Legend>
          <Checkboxes id="waste" name="waste" hint="Select all that apply" error={error}>
            <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
            <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
            <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          </Checkboxes>
        </Fieldset>
        <TextInput
          label="Error Value"
          value={error}
          onChange={(e) => setError(e.currentTarget.value)}
        />
      </form>
    );
  },
  name: 'With Error (String)',
};
