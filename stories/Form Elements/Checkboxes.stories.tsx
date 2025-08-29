import React, { useRef, useState, useEffect, SyntheticEvent } from 'react';
import { Fieldset, Checkboxes, TextInput, Button } from '../../src';
import { Meta, StoryObj } from '@storybook/react-vite';

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
  title: 'Form Elements/Checkboxes',
  component: Checkboxes,
};
export default meta;
type Story = StoryObj<typeof Checkboxes>;

type CheckboxState = {
  box1: { name?: string; id?: string };
  box2: { name?: string; id?: string };
  box3: { name?: string; id?: string };
};

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
    const [errorToggle, setErrorToggle] = useState(true);
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
    const [error, setError] = useState('Please select an option');
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

export const NoIDSupplied: Story = {
  render: function NoIDSuppliedRender() {
    const checkbox1Ref = useRef<HTMLInputElement>(null);
    const checkbox2Ref = useRef<HTMLInputElement>(null);
    const checkbox3Ref = useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = useState<CheckboxState>({
      box1: {
        name: '',
        id: '',
      },
      box2: {
        name: '',
        id: '',
      },
      box3: {
        name: '',
        id: '',
      },
    });

    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id,
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id,
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id,
        },
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);

    return (
      <form style={{ padding: 20 }}>
        <h2>Scenario: No ID Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes>
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </form>
    );
  },
};

export const NameSupplied: Story = {
  render: function NameSuppliedRender() {
    const checkbox1Ref = useRef<HTMLInputElement>(null);
    const checkbox2Ref = useRef<HTMLInputElement>(null);
    const checkbox3Ref = useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = useState<CheckboxState>({
      box1: {
        name: '',
        id: '',
      },
      box2: {
        name: '',
        id: '',
      },
      box3: {
        name: '',
        id: '',
      },
    });

    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id,
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id,
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id,
        },
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);

    return (
      <form style={{ padding: 20 }}>
        <h2>Scenario: Name Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the Checkboxes Name</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes name="name-supplied">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </form>
    );
  },
};

export const IDPrefixSupplied: Story = {
  render: function IDPrefixSuppliedRender() {
    const checkbox1Ref = useRef<HTMLInputElement>(null);
    const checkbox2Ref = useRef<HTMLInputElement>(null);
    const checkbox3Ref = useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = useState<CheckboxState>({
      box1: {
        name: '',
        id: '',
      },
      box2: {
        name: '',
        id: '',
      },
      box3: {
        name: '',
        id: '',
      },
    });

    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id,
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id,
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id,
        },
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);

    return (
      <form style={{ padding: 20 }}>
        <h2>Scenario: ID Prefix Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the ID prefix</li>
          <li>The Checkboxes are assigned randomly generated names</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes idPrefix="idprefix">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </form>
    );
  },
};

export const IDPrefixAndNameSupplied: Story = {
  render: function IDPrefixAndNameSuppliedRender() {
    const checkbox1Ref = useRef<HTMLInputElement>(null);
    const checkbox2Ref = useRef<HTMLInputElement>(null);
    const checkbox3Ref = useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = useState<CheckboxState>({
      box1: {
        name: '',
        id: '',
      },
      box2: {
        name: '',
        id: '',
      },
      box3: {
        name: '',
        id: '',
      },
    });

    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id,
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id,
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id,
        },
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);

    return (
      <form style={{ padding: 20 }}>
        <h2>Scenario: ID Prefix and Name Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the ID prefix</li>
          <li>The Checkboxes have the same name as the Checkboxes component</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes idPrefix="idprefix" name="testname">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </form>
    );
  },
};

export const OnChangeAndOnInputHandlers: Story = {
  render: function OnChangeAndOnInputHandlersRender() {
    const [changeEventLog, setChangeEventLog] = useState<Array<string>>([]);
    const [inputEventLog, setInputEventLog] = useState<Array<string>>([]);
    const [currentValue, setCurrentValue] = useState<Array<string>>([]);

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      setChangeEventLog([
        ...changeEventLog,
        `[${target.id}] Value: ${target.value}, Checked: ${target.checked}`,
      ]);
      if (currentValue.includes(target.value)) {
        setCurrentValue(currentValue.filter((x) => x !== target.value));
      } else {
        setCurrentValue([...currentValue, target.value]);
      }
    };

    const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      setInputEventLog([
        ...inputEventLog,
        `[${target.id}] Value: ${target.value}, Checked: ${target.checked}`,
      ]);
    };

    return (
      <form style={{ padding: 20 }}>
        <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>OnChange Handlers are fired using the generated IDs and Names</li>
          <li>The value is passed through</li>
        </ul>
        <h5>Component</h5>
        <Checkboxes onChange={handleChange} onInput={handleInput}>
          <Checkboxes.Box value="1">Box 1</Checkboxes.Box>
          <Checkboxes.Box value="2">Box 2</Checkboxes.Box>
          <Checkboxes.Box value="3">Box 3</Checkboxes.Box>
        </Checkboxes>
        <br />
        <h5>Current Value</h5>
        <pre>{JSON.stringify(currentValue, null, 2)}</pre>
        <h5>Change Events</h5>
        <ul className="nhsuk-hint">
          {changeEventLog.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <h5>Input Events</h5>
        <ul className="nhsuk-hint">
          {inputEventLog.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </form>
    );
  },
};
