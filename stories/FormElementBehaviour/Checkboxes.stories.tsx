/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, SyntheticEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkboxes } from '../../src';

const stories = storiesOf('FormElementBehaviour: Checkboxes', module);

type CheckboxState = {
  box1: { name?: string; id?: string };
  box2: { name?: string; id?: string };
  box3: { name?: string; id?: string };
};

stories
  .add('No ID supplied', () => {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
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
      <div style={{ padding: 20 }}>
        <h2>Scenario: No ID Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>Box 1 ID: {checkboxState.box1.id}</li>
          <li>Box 2 ID: {checkboxState.box2.id}</li>
          <li>Box 3 ID: {checkboxState.box3.id}</li>
          <li>Box 1 Name: {checkboxState.box1.name}</li>
          <li>Box 2 Name: {checkboxState.box2.name}</li>
          <li>Box 3 Name: {checkboxState.box3.name}</li>
        </ul>
        <h5>Component</h5>
        <Checkboxes>
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>
    );
  })
  .add('Name Supplied', () => {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
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
      <div style={{ padding: 20 }}>
        <h2>Scenario: Name Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the Checkboxes Name</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>Box 1 ID: {checkboxState.box1.id}</li>
          <li>Box 2 ID: {checkboxState.box2.id}</li>
          <li>Box 3 ID: {checkboxState.box3.id}</li>
          <li>Box 1 Name: {checkboxState.box1.name}</li>
          <li>Box 2 Name: {checkboxState.box2.name}</li>
          <li>Box 3 Name: {checkboxState.box3.name}</li>
        </ul>
        <h5>Component</h5>
        <Checkboxes name="name-supplied">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>
    );
  })
  .add('ID Prefix Supplied', () => {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
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
      <div style={{ padding: 20 }}>
        <h2>Scenario: ID Prefix Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the ID prefix</li>
          <li>The Checkboxes are assigned randomly generated names</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>Box 1 ID: {checkboxState.box1.id}</li>
          <li>Box 2 ID: {checkboxState.box2.id}</li>
          <li>Box 3 ID: {checkboxState.box3.id}</li>
          <li>Box 1 Name: {checkboxState.box1.name}</li>
          <li>Box 2 Name: {checkboxState.box2.name}</li>
          <li>Box 3 Name: {checkboxState.box3.name}</li>
        </ul>
        <h5>Component</h5>
        <Checkboxes idPrefix="idprefix">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>
    );
  })
  .add('ID Prefix and Name Supplied', () => {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);

    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
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
      <div style={{ padding: 20 }}>
        <h2>Scenario: ID Prefix and Name Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the ID prefix</li>
          <li>The Checkboxes have the same name as the Checkboxes component</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>Box 1 ID: {checkboxState.box1.id}</li>
          <li>Box 2 ID: {checkboxState.box2.id}</li>
          <li>Box 3 ID: {checkboxState.box3.id}</li>
          <li>Box 1 Name: {checkboxState.box1.name}</li>
          <li>Box 2 Name: {checkboxState.box2.name}</li>
          <li>Box 3 Name: {checkboxState.box3.name}</li>
        </ul>
        <h5>Component</h5>
        <Checkboxes idPrefix="idprefix" name="testname">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>
    );
  })
  .add('onChange and onInput handlers', () => {
    const [changeEventLog, setChangeEventLog] = React.useState<Array<string>>([]);
    const [inputEventLog, setInputEventLog] = React.useState<Array<string>>([]);
    const [currentValue, setCurrentValue] = React.useState<Array<string>>([]);

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      setChangeEventLog([
        ...changeEventLog,
        `[${target.id}] Value: ${target.value}, Checked: ${target.checked}`,
      ]);
      if (currentValue.includes(target.value)) {
        setCurrentValue(currentValue.filter(x => x !== target.value));
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
      <div style={{ padding: 20 }}>
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
      </div>
    );
  });
