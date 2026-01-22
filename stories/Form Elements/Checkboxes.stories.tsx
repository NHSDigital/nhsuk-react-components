import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState, type SyntheticEvent } from 'react';

import { Checkboxes } from '#components/form-elements/checkboxes/index.js';
import { Fieldset } from '#components/form-elements/fieldset/Fieldset.js';
import { TextInput } from '#components/form-elements/text-input/index.js';
import { BodyText } from '#components/typography/BodyText.js';
import { Heading } from '#components/typography/Heading.js';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/checkboxes" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation notes
 *
 * For details on the new form design pattern, check the documentation for the `Form` component.
 *
 * The `Checkbox` component provides a `CheckboxesContext` context, which the `Checkboxes.Item` components use. When each box initially renders, it will attempt to assign itself an `id` by calling the `getBoxId` method in the context. This will assign each box a sequential ID using either the `idPrefix` or `name` supplied to the Checkbox. If neither are provided, the element will generate it's own unique identifier.
 */

const meta: Meta<typeof Checkboxes> = {
  title: 'Form Elements/Checkboxes',
  component: Checkboxes,
  args: {
    legend: 'How do you want to be contacted about this?',
    legendProps: { isPageHeading: true, size: 'l' },
    name: 'example',
  },
};
export default meta;
type Story = StoryObj<typeof Checkboxes>;

type CheckboxState = {
  box1: { name?: string; id?: string };
  box2: { name?: string; id?: string };
  box3: { name?: string; id?: string };
};

export const Standard: Story = {
  name: 'Checkboxes default',
  args: {
    hint: 'Select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email">Email</Checkboxes.Item>
      <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
      <Checkboxes.Item value="text">Text message</Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithCaption: Story = {
  name: 'Checkboxes with caption',
  args: {
    legend: (
      <>
        <span className="nhsuk-caption-l">About you</span>
        How do you want to be contacted about this?
      </>
    ),
  },
  render: Standard.render,
};

export const WithHintText: Story = {
  name: 'Checkboxes with hint',
  args: {
    legend: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="british">British</Checkboxes.Item>
      <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
      <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithHintTextOnItems: Story = {
  name: 'Checkboxes with hints on items',
  args: {
    legend: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item hint="including English, Scottish, Welsh and Northern Irish" value="british">
        British
      </Checkboxes.Item>
      <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
      <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithValues: Story = {
  name: 'Checkboxes with pre-checked values',
  args: {
    name: 'exampleConditional1',
    error: 'Select how you want to be contacted',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item
        value="email"
        checked
        conditional={
          <TextInput
            label="Email address"
            name="email"
            spellCheck="false"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Email
      </Checkboxes.Item>
      <Checkboxes.Item
        value="phone"
        conditional={
          <TextInput
            label="Phone number"
            name="phone"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item
        value="text"
        checked
        conditional={
          <TextInput
            label="Mobile phone number"
            name="mobile"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const Small: Story = {
  name: 'Checkboxes small',
  args: {
    ...Standard.args,
    legendProps: { isPageHeading: true, size: 'm' },
    small: true,
  },
  render: Standard.render,
};

export const SmallWithHintText: Story = {
  name: 'Checkboxes small with hint',
  args: {
    ...WithHintText.args,
    legendProps: { isPageHeading: true, size: 'm' },
    small: true,
  },
  render: WithHintText.render,
};

export const SmallWithHintTextOnItems: Story = {
  name: 'Checkboxes small with hints on items',
  args: {
    ...WithHintTextOnItems.args,
    legendProps: { isPageHeading: true, size: 'm' },
    small: true,
  },
  render: WithHintTextOnItems.render,
};

export const WithDisabledItem: Story = {
  name: 'Checkboxes with disabled item',
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="red">Red</Checkboxes.Item>
      <Checkboxes.Item value="green">Green</Checkboxes.Item>
      <Checkboxes.Item value="blue" disabled>
        Blue
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithError: Story = {
  name: 'Checkboxes with error message',
  args: {
    error: 'Select how you want to be contacted',
  },
  render: Standard.render,
};

export const WithHintAndError: Story = {
  name: 'Checkboxes with hint and error',
  args: {
    hint: 'Select all options that are relevant to you',
    error: 'Select how you want to be contacted',
  },
  render: Standard.render,
};

export const WithConditionalContent: Story = {
  name: 'Checkboxes with conditional content',
  args: {
    name: 'exampleConditional2',
    hint: 'Select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item
        value="email"
        conditional={
          <TextInput
            label="Email address"
            name="email"
            spellCheck="false"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Email
      </Checkboxes.Item>
      <Checkboxes.Item
        value="phone"
        conditional={
          <TextInput
            label="Phone number"
            name="phone"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item
        value="text"
        conditional={
          <TextInput
            label="Mobile phone number"
            name="mobile"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithConditionalContentError: Story = {
  name: 'Checkboxes with conditional content, error message',
  args: {
    hint: 'Select all options that are relevant to you',
    error: 'Select how you like to be contacted',
  },
  render: WithConditionalContent.render,
};

export const WithConditionalContentErrorNested: Story = {
  name: 'Checkboxes with conditional content, error message (nested)',
  args: {
    name: 'exampleConditional3',
    hint: 'Select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item
        value="email"
        conditional={
          <TextInput
            label="Email address"
            name="email"
            spellCheck="false"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Email
      </Checkboxes.Item>
      <Checkboxes.Item
        value="phone"
        checked
        conditional={
          <TextInput
            label="Phone number"
            error="Enter your phone number"
            name="phone"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item
        value="text"
        conditional={
          <TextInput
            label="Mobile phone number"
            name="mobile"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Text message
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithExclusiveNoneOption: Story = {
  name: 'Checkboxes with "none of the above" option',
  args: {
    legend: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item value="email">Email</Checkboxes.Item>
      <Checkboxes.Item value="phone">Phone</Checkboxes.Item>
      <Checkboxes.Item value="text">Text message</Checkboxes.Item>
      <Checkboxes.Divider />
      <Checkboxes.Item value="none" exclusive>
        None of the above
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithExclusiveNoneOptionConditional: Story = {
  name: 'Checkboxes with "none of the above" option, conditional content',
  args: {
    name: 'exampleConditional4',
    legend: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Item
        value="email"
        conditional={
          <TextInput
            label="Email address"
            name="email"
            spellCheck="false"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Email
      </Checkboxes.Item>
      <Checkboxes.Item
        value="phone"
        conditional={
          <TextInput
            label="Phone number"
            name="phone"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Phone
      </Checkboxes.Item>
      <Checkboxes.Item
        value="text"
        conditional={
          <TextInput
            label="Mobile phone number"
            name="mobile"
            type="tel"
            className="nhsuk-u-width-two-thirds"
          />
        }
      >
        Text message
      </Checkboxes.Item>
      <Checkboxes.Divider />
      <Checkboxes.Item value="none" exclusive>
        None of the above
      </Checkboxes.Item>
    </Checkboxes>
  ),
};

export const WithExclusiveNoneOptionNamed: Story = {
  name: 'Checkboxes with "none of the above" option (named groups)',
  render: (args) => (
    <Fieldset>
      <Fieldset.Legend headingLevel="h1" size="l">
        What is your address?
      </Fieldset.Legend>

      <Heading headingLevel="h2" size="m">
        Primary colours
      </Heading>

      <Checkboxes idPrefix="colour-primary" name="colour">
        <Checkboxes.Item value="red" exclusiveGroup="colour-primary">
          Red
        </Checkboxes.Item>
        <Checkboxes.Item
          value="yellow"
          exclusiveGroup="colour-primary"
          conditional={<BodyText>Orange is much nicer than yellow!</BodyText>}
        >
          Yellow
        </Checkboxes.Item>
        <Checkboxes.Item value="blue" exclusiveGroup="colour-primary">
          Blue
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none-primary" exclusiveGroup="colour-primary" exclusive>
          None of the primary colours
        </Checkboxes.Item>
      </Checkboxes>

      <Heading headingLevel="h2" size="m">
        Secondary colours
      </Heading>

      <Checkboxes idPrefix="colour-secondary" name="colour">
        <Checkboxes.Item value="green" exclusiveGroup="colour-secondary">
          Green
        </Checkboxes.Item>
        <Checkboxes.Item value="purple" exclusiveGroup="colour-secondary">
          Purple
        </Checkboxes.Item>
        <Checkboxes.Item
          value="orange"
          exclusiveGroup="colour-secondary"
          conditional={<BodyText>I like orange too!</BodyText>}
        >
          Orange
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none-secondary" exclusiveGroup="colour-secondary" exclusive>
          None of the secondary colours
        </Checkboxes.Item>
      </Checkboxes>

      <Heading headingLevel="h2" size="m">
        Other colours
      </Heading>

      <Checkboxes idPrefix="colour-other" name="colour">
        <Checkboxes.Item value="imaginary" exclusiveGroup="colour-other">
          An imaginary colour
        </Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" exclusive>
          None of the above
        </Checkboxes.Item>
      </Checkboxes>
    </Fieldset>
  ),
};

export const NoIDSupplied: Story = {
  name: 'Checkboxes with no ID supplied',
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
      <>
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
      </>
    );
  },
};

export const NameSupplied: Story = {
  name: 'Checkboxes with name supplied',
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
      <>
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
      </>
    );
  },
};

export const IDPrefixSupplied: Story = {
  name: 'Checkboxes with ID prefix supplied',
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
      <>
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
      </>
    );
  },
};

export const IDPrefixAndNameSupplied: Story = {
  name: 'Checkboxes with ID prefix and name supplied',
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
      <>
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
        <Checkboxes idPrefix="idprefix-name" name="testname">
          <Checkboxes.Item ref={checkbox1Ref}>Box 1</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox2Ref}>Box 2</Checkboxes.Item>
          <Checkboxes.Item ref={checkbox3Ref}>Box 3</Checkboxes.Item>
        </Checkboxes>
      </>
    );
  },
};

export const OnChangeAndOnInputHandlers: Story = {
  name: 'Checkboxes change and input handlers',
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
      <>
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
      </>
    );
  },
};
