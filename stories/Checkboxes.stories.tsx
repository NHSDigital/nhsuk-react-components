import React from 'react';
import { Fieldset, Checkboxes, Input, Label, Hint, ErrorMessage } from '../src';
import { Button } from '../src/components/button';
import FormGroup from '../src/components/formgroup';

export const Standard = (): JSX.Element => (
  <Fieldset aria-describedby="nationality--hint">
    <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
    <Checkboxes
      name="nationality"
      id="nationality"
      hint="If you have more than 1 nationality, select all options that are relevant to you."
    >
      <Checkboxes.Box value="british">British</Checkboxes.Box>
      <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
      <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
    </Checkboxes>
  </Fieldset>
);

export const WithHintText = (): JSX.Element => (
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
);

export const WithDisabledItem = (): JSX.Element => (
  <Checkboxes id="colours" name="colours">
    <Checkboxes.Box value="red">Red</Checkboxes.Box>
    <Checkboxes.Box value="green">Green</Checkboxes.Box>
    <Checkboxes.Box value="red" disabled>
      Blue
    </Checkboxes.Box>
  </Checkboxes>
);

export const WithConditionalContent = (): JSX.Element => (
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
);

export const WithLegendAsPageHeading = (): JSX.Element => (
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
);

export const WithErrorBoolean = (): JSX.Element => {
  const [errorToggle, setErrorToggle] = React.useState(true);
  return (
    <>
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
    </>
  );
};
WithErrorBoolean.storyName = 'With Error (Boolean)';

export const WithErrorString = (): JSX.Element => {
  const [error, setError] = React.useState('Please select an option');
  return (
    <>
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
      <Input label="Error Value" value={error} onChange={(e) => setError(e.currentTarget.value)} />
    </>
  );
};
WithErrorString.storyName = 'With Error (String)';

export const WithCustomFormGroup = (): JSX.Element => (
  <FormGroup>
    <Fieldset>
      <Label>Nationality</Label>
      <Hint>If you have more than 1 nationality, select all options that are relevant to you.</Hint>
      <ErrorMessage>Something went wrong.</ErrorMessage>
      <Checkboxes name="nationality" id="nationality">
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);

export default {
  title: 'Components/Checkboxes',
  component: Checkboxes,
};
