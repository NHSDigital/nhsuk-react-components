import type { Story } from '@storybook/react';
import React from 'react';
import { Checkboxes, Fieldset, Input } from '../src';
import FormGroup from '../src/components/form-group';

export const StandardCheckboxes: Story = ({ label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${restArgs.id}--hint`}>
      <Fieldset.Legend>{label}</Fieldset.Legend>
      <Checkboxes {...restArgs}>
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);
StandardCheckboxes.args = {
  id: 'nationality',
  label: 'What is your nationality?',
  hint: 'If you have more than 1 nationality, select all options that are relevant to you.',
};

export const CheckboxesWithHints: Story = ({ label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${restArgs.id}--hint`}>
      <Fieldset.Legend isPageHeading size="m">
        {label}
      </Fieldset.Legend>
      <Checkboxes {...restArgs}>
        <Checkboxes.Box
          value="gov-gateway"
          hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </Checkboxes.Box>
        <Checkboxes.Box
          value="gov-gateway"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        >
          Sign in with NHS.UK login
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);
CheckboxesWithHints.args = {
  id: 'login-method',
  label: 'How do you want to sign in?',
};

export const CheckboxesWithDisabledItem: Story = (args) => (
  <Checkboxes {...args}>
    <Checkboxes.Box value="red">Red</Checkboxes.Box>
    <Checkboxes.Box value="green">Green</Checkboxes.Box>
    <Checkboxes.Box value="blue" disabled>
      Blue
    </Checkboxes.Box>
  </Checkboxes>
);
CheckboxesWithDisabledItem.args = {
  id: 'colours',
};

export const CheckboxesWithLegendAsPageHeading: Story = ({ label, ...restArgs }) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend isPageHeading size="l">
        {label}
      </Fieldset.Legend>
    </Fieldset>
    <Checkboxes {...restArgs}>
      <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
      <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
      <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
    </Checkboxes>
  </FormGroup>
);
CheckboxesWithLegendAsPageHeading.args = {
  id: 'waste',
  label: 'Which types of waste do you transport regularly?',
  hint: 'Select all that apply',
};

export const CheckboxesWithError: Story = ({ label, ...restArgs }) => (
  <FormGroup>
    <Fieldset>
      <Fieldset.Legend isPageHeading size="l">
        {label}
      </Fieldset.Legend>
    </Fieldset>
    <Checkboxes {...restArgs}>
      <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
      <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
      <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
    </Checkboxes>
  </FormGroup>
);
CheckboxesWithError.args = {
  id: 'waste-error',
  label: 'Which types of waste do you transport regularly?',
  hint: 'Select all that apply',
  error: 'Please select an option',
};

export const CheckboxesWithConditionalContent: Story = ({ label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${restArgs.id}--hint`}>
      <Fieldset.Legend isPageHeading size="l">
        {label}
      </Fieldset.Legend>
      <Checkboxes {...restArgs}>
        <Checkboxes.Box
          value="email"
          conditional={<Input width="20" label="Email address" type="email" id="email" />}
        >
          Email
        </Checkboxes.Box>
        <Checkboxes.Box
          value="phone"
          conditional={<Input width="20" label="Phone number" id="phone" type="text" />}
        >
          Phone
        </Checkboxes.Box>
        <Checkboxes.Box
          value="text"
          conditional={<Input width="20" label="Mobile phone number" id="mobile" type="text" />}
        >
          Text message
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);
CheckboxesWithConditionalContent.args = {
  id: 'contact',
  label: 'How would you prefer to be contacted?',
  hint: 'Select all options that are relevant to you',
};

// export const Standard = (): JSX.Element => (
//   <Fieldset aria-describedby="nationality--hint">
//     <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
//     <Checkboxes
//       name="nationality"
//       id="nationality"
//       hint="If you have more than 1 nationality, select all options that are relevant to you."
//     >
//       <Checkboxes.Box value="british">British</Checkboxes.Box>
//       <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
//       <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
//     </Checkboxes>
//   </Fieldset>
// );

// export const WithHintText = (): JSX.Element => (
//   <Fieldset>
//     <Fieldset.Legend isPageHeading>How do you want to sign in?</Fieldset.Legend>
//     <Checkboxes>
//       <Checkboxes.Box
//         id="government-gateway"
//         name="gateway"
//         type="checkbox"
//         value="gov-gateway"
//         hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
//       >
//         Sign in with Government Gateway
//       </Checkboxes.Box>
//       <Checkboxes.Box
//         id="nhsuk-login"
//         name="verify"
//         value="nhsuk-verify"
//         hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
//       >
//         Sign in with NHS.UK login
//       </Checkboxes.Box>
//     </Checkboxes>
//   </Fieldset>
// );

// export const WithDisabledItem = (): JSX.Element => (
//   <Checkboxes id="colours" name="colours">
//     <Checkboxes.Box value="red">Red</Checkboxes.Box>
//     <Checkboxes.Box value="green">Green</Checkboxes.Box>
//     <Checkboxes.Box value="red" disabled>
//       Blue
//     </Checkboxes.Box>
//   </Checkboxes>
// );

// export const WithConditionalContent = (): JSX.Element => (
//   <Fieldset aria-describedby="waste--hint">
//     <Fieldset.Legend isPageHeading>
//       Which types of waste do you transport regularly?
//     </Fieldset.Legend>
//     <Checkboxes id="waste" name="waste" hint="Select all that apply">
//       <Checkboxes.Box conditional={<p>This includes rocks and earth.</p>} value="mines">
//         Waste from mines or quarries
//       </Checkboxes.Box>
//     </Checkboxes>
//   </Fieldset>
// );

// export const WithLegendAsPageHeading = (): JSX.Element => (
//   <Fieldset aria-describedby="waste--hint">
//     <Fieldset.Legend isPageHeading>
//       Which types of waste do you transport regularly?
//     </Fieldset.Legend>
//     <Checkboxes id="waste" name="waste" hint="Select all that apply">
//       <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
//       <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
//       <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
//     </Checkboxes>
//   </Fieldset>
// );

// export const WithErrorBoolean = (): JSX.Element => {
//   const [errorToggle, setErrorToggle] = React.useState(true);
//   return (
//     <>
//       <Fieldset aria-describedby="waste-hint">
//         <Fieldset.Legend isPageHeading>
//           Which types of waste do you transport regularly?
//         </Fieldset.Legend>
//         <Checkboxes error={errorToggle} id="waste" name="waste" hint="Select all that apply">
//           <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
//           <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
//           <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
//         </Checkboxes>
//       </Fieldset>
//       <Button
//         onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
//           e.preventDefault();
//           setErrorToggle(!errorToggle);
//         }}
//       >
//         Toggle Error
//       </Button>
//     </>
//   );
// };
// WithErrorBoolean.storyName = 'With Error (Boolean)';

// export const WithErrorString = (): JSX.Element => {
//   const [error, setError] = React.useState('Please select an option');
//   return (
//     <>
//       <Fieldset aria-describedby="waste-hint">
//         <Fieldset.Legend isPageHeading>
//           Which types of waste do you transport regularly?
//         </Fieldset.Legend>
//         <Checkboxes id="waste" name="waste" hint="Select all that apply" error={error}>
//           <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
//           <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
//           <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
//         </Checkboxes>
//       </Fieldset>
//       <Input label="Error Value" value={error} onChange={(e) => setError(e.currentTarget.value)} />
//     </>
//   );
// };
// WithErrorString.storyName = 'With Error (String)';

// export const WithCustomFormGroup = (): JSX.Element => (
//   <FormGroup>
//     <Fieldset>
//       <Label>Nationality</Label>
//       <Hint>If you have more than 1 nationality, select all options that are relevant to you.</Hint>
//       <ErrorMessage>Something went wrong.</ErrorMessage>
//       <Checkboxes name="nationality" id="nationality">
//         <Checkboxes.Box value="british">British</Checkboxes.Box>
//         <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
//         <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
//       </Checkboxes>
//     </Fieldset>
//   </FormGroup>
// );

export default {
  title: 'Components/Checkboxes',
  component: Checkboxes,
  argTypes: {
    label: { type: { name: 'string' } },
    hint: { type: { name: 'string' } },
    error: { type: { name: 'string' } },
  },
  parameters: {
    docs: {
      source: {
        code: '',
      },
    },
  },
};
