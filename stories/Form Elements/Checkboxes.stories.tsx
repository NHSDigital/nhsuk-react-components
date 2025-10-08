import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState, type SyntheticEvent } from 'react';
import { Checkboxes, TextInput } from '#components';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/checkboxes" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * For details on the new form design pattern, check the documentation for the `Form` component.
 *
 * The `Checkbox` component provides a `CheckboxesContext` context, which the `Checkboxes.Item` components use. When each box initially renders, it will attempt to assign itself an `id` by calling the `getBoxId` method in the context. This will assign each box a sequential ID using either the `idPrefix` or `name` supplied to the Checkbox. If neither are provided, the element will generate it's own unique identifier.
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
 *             <Checkboxes.Item value="british">British</Checkboxes.Item>
 *             <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
 *             <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
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
      <Checkboxes
        legend="What is your nationality?"
        legendProps={{ size: 'l' }}
        hint="If you have more than 1 nationality, select all options that are relevant to you"
        idPrefix={args.idPrefix}
        name="nationality"
        id="nationality"
      >
        <Checkboxes.Item value="british">British</Checkboxes.Item>
        <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
        <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
      </Checkboxes>
    </form>
  ),
};

export const WithHintText: Story = {
  render: (args) => (
    <form>
      <Checkboxes legend="How do you want to sign in?" legendProps={{ size: 'l' }}>
        <Checkboxes.Item
          id="government-gateway"
          name="gateway"
          type="checkbox"
          value="gov-gateway"
          hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </Checkboxes.Item>
        <Checkboxes.Item
          id="nhsuk-login"
          name="verify"
          value="nhsuk-verify"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        >
          Sign in with NHS.UK login
        </Checkboxes.Item>
      </Checkboxes>
    </form>
  ),
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <form>
      <Checkboxes id="colours" name="colours">
        <Checkboxes.Item value="red">Red</Checkboxes.Item>
        <Checkboxes.Item value="green">Green</Checkboxes.Item>
        <Checkboxes.Item value="red" disabled>
          Blue
        </Checkboxes.Item>
      </Checkboxes>
    </form>
  ),
};

export const WithConditionalContent: Story = {
  render: (args) => (
    <form>
      <Checkboxes
        legend="What types of waste do you transport regularly?"
        legendProps={{ size: 'l' }}
        hint="Select all that apply"
        id="waste"
        name="waste"
      >
        <Checkboxes.Item conditional={<p>This includes rocks and earth.</p>} value="mines">
          Waste from mines or quarries
        </Checkboxes.Item>
      </Checkboxes>
    </form>
  ),
};

export const WithLegendAsPageHeading: Story = {
  render: (args) => (
    <form>
      <Checkboxes
        legend="Which types of waste do you transport regularly?"
        legendProps={{ isPageHeading: true, size: 'l' }}
        hint="Select all that apply"
        id="waste"
        name="waste"
      >
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
      </Checkboxes>
    </form>
  ),
};

export const WithExclusiveNoneOption: Story = {
  render: (args) => (
    <form>
      <Checkboxes
        legend="Do you have any of these symptoms?"
        legendProps={{ size: 'l' }}
        hint="Select all the symptoms you have"
        id="symptoms"
        name="symptoms"
      >
        <Checkboxes.Item value="sore-throat">Sore throat</Checkboxes.Item>
        <Checkboxes.Item value="runny-nose">Runny nose</Checkboxes.Item>
        <Checkboxes.Item value="muscle-pain">Muscle or joint pain</Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>
    </form>
  ),
};

export const WithError: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState('Please select an option');
    return (
      <form>
        <Checkboxes
          legend="Which types of waste do you transport regularly?"
          legendProps={{ size: 'l' }}
          hint="Select all that apply"
          error={error}
          id="waste"
          name="waste"
        >
          <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
          <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
          <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        </Checkboxes>
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
    }, []);

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
          <Checkboxes.Item ref={checkbox1Ref}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox2Ref}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox3Ref}>Box 3</Checkboxes.Item>
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
    }, []);

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
          <Checkboxes.Item ref={checkbox1Ref}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox2Ref}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox3Ref}>Box 3</Checkboxes.Item>
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
    }, []);

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
          <Checkboxes.Item ref={checkbox1Ref}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox2Ref}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox3Ref}>Box 3</Checkboxes.Item>
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
    }, []);

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
          <Checkboxes.Item ref={checkbox1Ref}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox2Ref}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox3Ref}>Box 3</Checkboxes.Item>
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
          <Checkboxes.Item value="1">Box 1</Checkboxes.Item>
          <Checkboxes.Item value="2">Box 2</Checkboxes.Item>
          <Checkboxes.Item value="3">Box 3</Checkboxes.Item>
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
