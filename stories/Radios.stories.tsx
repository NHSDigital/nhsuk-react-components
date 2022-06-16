import React, { MouseEvent } from 'react';
import { Button, Checkboxes, Fieldset, Input, Radios } from '../src';

export const StandardRadios = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
    <Radios
      name="example"
      id="standard-example"
      hint="This includes changing your last name or spelling your name differently."
    >
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no" checked>
        No
      </Radios.Radio>
    </Radios>
  </Fieldset>
);

export const InlineRadios = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
    <Radios
      name="example"
      inline
      id="inline-example"
      hint="This includes changing your last name or spelling your name differently."
    >
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no" checked>
        No
      </Radios.Radio>
    </Radios>
  </Fieldset>
);

export const DisabledRadios = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
    <Radios
      name="example"
      id="disabled-example"
      hint="This includes changing your last name or spelling your name differently."
    >
      <Radios.Radio disabled value="yes">
        Yes
      </Radios.Radio>
      <Radios.Radio disabled value="no">
        No
      </Radios.Radio>
    </Radios>
  </Fieldset>
);

export const RadiosWithConditionalContent = (): JSX.Element => {
  const impairmentsForm = (
    <Checkboxes name="impairments" id="impairments">
      <Checkboxes.Box value="autism">Autism</Checkboxes.Box>
      <Checkboxes.Box value="developmental-conditions">
        Developmental conditions (excluding autism)
      </Checkboxes.Box>
      <Checkboxes.Box value="dementia">Dementia</Checkboxes.Box>
      <Checkboxes.Box value="learning-disability">Learning disability</Checkboxes.Box>
      <Checkboxes.Box value="mental-health-condition">Mental Health Condition</Checkboxes.Box>
      <Checkboxes.Box value="physical-disability">Physical disability</Checkboxes.Box>
      <Checkboxes.Box value="sensory-disability">
        Sensory disability - such as sight, hearing or verbal
      </Checkboxes.Box>
      <Checkboxes.Box value="long-term-condition">Long-term condition</Checkboxes.Box>
    </Checkboxes>
  );

  return (
    <Fieldset>
      <Fieldset.Legend>Impairment requirement</Fieldset.Legend>
      <Radios name="example" id="example-conditional" hint="Select relevant options.">
        <Radios.Radio id="hello1" value="yes" conditional={impairmentsForm}>
          Patient requires an impairment to be added
        </Radios.Radio>
        <Radios.Radio id="hello2" value="no">
          Patient would prefer not to say
        </Radios.Radio>
      </Radios>
    </Fieldset>
  );
};
export const RadiosWithADivider = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
    <Radios name="example" id="example-divider">
      <Radios.Radio value="government-gateway">Use Government Gateway</Radios.Radio>
      <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Radio value="create-account">Create an account</Radios.Radio>
    </Radios>
  </Fieldset>
);

export const RadiosWithHintsOnItems = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
    <Radios name="example" id="example-divider">
      <Radios.Radio
        value="government-gateway"
        hint="You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before."
      >
        Use Government Gateway
      </Radios.Radio>
      <Radios.Radio
        value="nhsuk-login"
        hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
      >
        Use NHS.UK login
      </Radios.Radio>
    </Radios>
  </Fieldset>
);

export const RadiosWithoutFieldset = (): JSX.Element => (
  <Radios name="colours" id="colours">
    <Radios.Radio value="red">Red</Radios.Radio>
    <Radios.Radio value="green">Green</Radios.Radio>
    <Radios.Radio value="blue">Blue</Radios.Radio>
  </Radios>
);

export const RadiosWithErrorBoolean = (): JSX.Element => {
  const [error, setError] = React.useState<boolean>(true);
  return (
    <>
      <Fieldset>
        <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
        <Radios
          name="example"
          error={error}
          hint="This includes changing your last name or spelling your name differently."
        >
          <Radios.Radio value="yes">Yes</Radios.Radio>
          <Radios.Radio value="no" checked>
            No
          </Radios.Radio>
        </Radios>
      </Fieldset>
      <Button
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setError(!error);
        }}
      >
        Toggle Error
      </Button>
    </>
  );
};
RadiosWithErrorBoolean.storyName = 'Radios With Error (Boolean)';

export const RadiosWithErrorString = (): JSX.Element => {
  const [error, setError] = React.useState('Please select an option');
  return (
    <>
      <Fieldset>
        <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
        <Radios
          id="example-error-string"
          name="example"
          error={error}
          hint="This includes changing your last name or spelling your name differently."
        >
          <Radios.Radio value="yes">Yes</Radios.Radio>
          <Radios.Radio value="no" checked>
            No
          </Radios.Radio>
        </Radios>
      </Fieldset>
      <Input value={error} onChange={(e) => setError(e.currentTarget.value)} />
    </>
  );
};
RadiosWithErrorString.storyName = 'Radios With Error (String)';

export default {
  title: 'Components/Radios',
  component: Radios,
};
