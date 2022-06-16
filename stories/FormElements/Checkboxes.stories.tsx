import type { Story } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import { Checkboxes, Fieldset, FormGroup, Input } from '../../src';

export const Example: Story = (args) => (
  <FormGroup>
    <Fieldset aria-describedby="checkboxes--hint">
      <Fieldset.Legend isPageHeading size="l">
        How would you like to be contacted?
      </Fieldset.Legend>
      <Checkboxes {...args}>
        <Checkboxes.Box value="email">Email</Checkboxes.Box>
        <Checkboxes.Box value="phone">Phone</Checkboxes.Box>
        <Checkboxes.Box value="text">Text message</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);
Example.args = {
  id: 'checkboxes',
  name: 'contact',
  hint: 'Select all options that are relevant to you.',
};

export const CheckboxItemsWithHints: Story = (args) => (
  <FormGroup>
    <Fieldset aria-describedby="nationality--hint">
      <Fieldset.Legend isPageHeading size="l">
        What is your nationality?
      </Fieldset.Legend>
      <Checkboxes {...args}>
        <Checkboxes.Box
          value="british"
          hint="including English, Scottish, Welsh and Northern Irish"
        >
          British
        </Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);
CheckboxItemsWithHints.storyName = 'Checkbox items with hints';
CheckboxItemsWithHints.args = {
  id: 'nationality',
  name: 'nationality',
  hint: 'If you have dual nationality, select all options that are relevant to you.',
};

export const ConditionallyRevealingContent: Story = (args) => (
  <FormGroup>
    <Fieldset aria-describedby="contact-conditional--hint">
      <Fieldset.Legend isPageHeading size="l">
        How would you prefer to be contacted?
      </Fieldset.Legend>
      <Checkboxes {...args} hint="How would you prefer to be contacted?">
        <Checkboxes.Box value="email" conditional={<Input id="email" label="Email address" />}>
          Email
        </Checkboxes.Box>
        <Checkboxes.Box value="phone" conditional={<Input id="phone" label="Phone number" />}>
          Phone
        </Checkboxes.Box>
        <Checkboxes.Box value="text" conditional={<Input id="text" label="Mobile phone number" />}>
          Text message
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  </FormGroup>
);
ConditionallyRevealingContent.storyName = 'Conditionally revealing content';
ConditionallyRevealingContent.args = {
  id: 'contact-conditional',
  name: 'contact-conditional',
  hint: 'How would you prefer to be contacted?',
};

export const AddingAnOptionForNone: Story = (args) => {
  const [checkboxData, setCheckboxData] = useState({
    sorethroat: false,
    runnynose: false,
    muscleorjointpain: false,
    none: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    // Check if anything has changed - if not, return
    if (checkboxData[value] === checked) return;

    // Exclusive option checked - Deselect every other box
    if (value === 'none' && checked) {
      setCheckboxData({
        sorethroat: false,
        runnynose: false,
        muscleorjointpain: false,
        none: true,
      });
      return true;
    }

    // Non-exclusive option checked - deselect exclusive option
    if (value !== 'none' && checked) {
      setCheckboxData((data) => ({ ...data, none: false, [value]: checked }));
      return true;
    }

    // Set any other changed values (i.e. box deselected)
    setCheckboxData((data) => ({ ...data, [value]: checked }));
    return true;
  };

  return (
    <FormGroup>
      <Fieldset aria-describedby="symptoms--hint">
        <Fieldset.Legend isPageHeading size="l">
          Do you have any of these symptoms?
        </Fieldset.Legend>
        <Checkboxes {...args} onChange={handleChange}>
          <Checkboxes.Box value="sorethroat" checked={checkboxData.sorethroat}>
            Sore throat
          </Checkboxes.Box>
          <Checkboxes.Box value="runnynose" checked={checkboxData.runnynose}>
            Runny nose
          </Checkboxes.Box>
          <Checkboxes.Box value="muscleorjointpain" checked={checkboxData.muscleorjointpain}>
            Muscle or joint pain
          </Checkboxes.Box>
          <Checkboxes.Divider>or</Checkboxes.Divider>
          <Checkboxes.Box value="none" checked={checkboxData.none}>
            No, I do not have any of these symptoms
          </Checkboxes.Box>
        </Checkboxes>
      </Fieldset>
    </FormGroup>
  );
};
AddingAnOptionForNone.parameters = {
  docs: {
    description: {
      story: `
#### Important Note

Checkboxes are **complicated**. Multiple states and classes need to be handled, as well as conditional content,
\`defaultChecked\`, \`checked\` attributes.

This has led to an issue: how can we **reliably** implement this pattern within the React library?
The answer right now is: we can't.

We can capture each \`ChangeEvent\` from an 'exclusive' checkbox, and with a combination of \`data\` attributes, the DOM
can be updated such that every other checkbox is deselected. However, this will only update the DOM and not the \`checked\`
prop in the \`Checkbox.Box\` component. The solution to this would mean making each Checkbox.Box a controlled component,
but complex logic would be required to determine the current state of each Checkbox, along with any provided \`checked\`,
\`defaultChecked\` or \`conditional\` props.

This is also compounded by the way that forms are typically used in React compared to standard HTML forms. Data is captured
from form elements using event handlers, such as \`onClick\` and \`onChange\` and is then processed accordingly in your
own application. By deselecting each checkbox in the DOM, we can't reliably dispatch these events to notify your application
that the data has changed, as [React's event system](https://reactjs.org/docs/events.html) also does not support standard
DOM Events in the same way as standard HTML. This can lead to unexpected behaviour within your application.

**TL;DR:** For this reason, you will need to bring your own implementation if you want to use this feature.

##### What about MutationObserver?

The MutationObserver API only looks for changes in the DOM, but the \`checked\` attribute of a \`HTMLInputElement\` is
stored in state, so MutationObserver cannot be used in this case.

##### Do you have a better idea?

If you can think of a better way that this could be implemented, you can either raise an issue on the \`nhsuk-react-components\`
with the \`enhancement\` label or get in touch with the team on the [NHS service manual slack](https://service-manual.nhs.uk/slack).

#### Example Implementation

\`\`\`jsx
const SymptomsCheckboxes = () => {
  const [checkboxData, setCheckboxData] = useState({
    soreThroat: false,
    runnyNose: false,
    muscleOrJointPain: false,
    none: false,
  });

  const handleChange = (event) => {
    const { value, checked } = event.target;

    // Check if anything has changed - if not, return
    if (checkboxData[value] === checked) return;

    // Exclusive option checked - Deselect every other box
    if (value === 'none' && checked) {
      setCheckboxData({
        soreThroat: false,
        runnyNose: false,
        muscleOrJointPain: false,
        none: true,
      });
      return true;
    }

    // Non-exclusive option checked - deselect exclusive option
    if (value !== 'none' && checked) {
      setCheckboxData((data) => ({ ...data, none: false, [value]: checked }));
      return true;
    }

    // Set any other changed values (i.e. box deselected)
    setCheckboxData((data) => ({ ...data, [value]: checked }));
    return true;
  };

  return (
    <Checkboxes onChange={handleChange}>
      <Checkboxes.Box value="soreThroat" checked={checkboxData.soreThroat}>
        Sore throat
      </Checkboxes.Box>
      <Checkboxes.Box value="runnyNose" checked={checkboxData.runnyNose}>
        Runny nose
      </Checkboxes.Box>
      <Checkboxes.Box value="muscleOrJointPain" checked={checkboxData.muscleOrJointPain}>
        Muscle or joint pain
      </Checkboxes.Box>
      <Checkboxes.Divider>or</Checkboxes.Divider>
      <Checkboxes.Box value="none" checked={checkboxData.none}>
        No, I do not have any of these symptoms
      </Checkboxes.Box>
    </Checkboxes>
  );
};
\`\`\`
`,
    },
  },
};

AddingAnOptionForNone;
AddingAnOptionForNone.storyName = 'Adding an option for "none"';
AddingAnOptionForNone.args = {
  id: 'symptoms',
  name: 'symptoms',
  hint: 'Select all the symptoms you have.',
};

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

const description = `
## Guidance

Find out more about the checkboxes component and when to use it in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/checkboxes).

## Example`;

export default {
  title: 'Form Elements/Checkboxes',
  component: Checkboxes,
  argTypes: {
    hint: { type: { name: 'string' } },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};
