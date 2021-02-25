import React, { useState } from 'react';
import { DateInput } from '../../src';

export const Standard = () => (
  <div style={{ padding: 20 }}>
    <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
    <h5>Expected Behaviour</h5>
    <ul className="nhsuk-hint">
      <li>OnChange Handlers are fired using the generated IDs and Names</li>
      <li>The value is passed through</li>
    </ul>
    <h5>Component</h5>
    <DateInput onChange={e => console.log(e.target.value)} hint="Test hint" label="Test label" />
  </div>
);

export const StandardWithError = () => (
  <div style={{ padding: 20 }}>
    <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
    <h5>Expected Behaviour</h5>
    <ul className="nhsuk-hint">
      <li>OnChange Handlers are fired using the generated IDs and Names</li>
      <li>The value is passed through</li>
    </ul>
    <h5>Component</h5>
    <DateInput
      onChange={e => console.log(e.target.value)}
      error="Test Error"
      hint="Test hint"
      label="Test label"
    />
    <h5>Component with specific field errors</h5>

    <DateInput
      onChange={e => console.log(e.target.value)}
      error="Test Error"
      hint="Test hint"
      label="Test label"
    >
      <DateInput.Day error={false} />
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
  </div>
);

export const PrePopulatedIndividualComponents = () => {
  const defaultValue = { day: '20', month: '09', year: '1996' };
  return (
    <div style={{ padding: 20 }}>
      <h5>Component</h5>
      <DateInput hint="Test hint" label="Test label">
        <DateInput.Day defaultValue={defaultValue.day} />
        <DateInput.Month defaultValue={defaultValue.month} />
        <DateInput.Year defaultValue={defaultValue.year} />
      </DateInput>
    </div>
  );
};

export const PrePopulatedWrapper = () => {
  const defaultValue = { day: '20', month: '09', year: '1996' };
  return (
    <div style={{ padding: 20 }}>
      <h5>Component</h5>
      <DateInput hint="Test hint" label="Test label" defaultValue={defaultValue} />
    </div>
  );
};

export const ControlledElementIndividualComponents = () => {
  const value = { day: '20', month: '09', year: '1996' };
  return (
    <div style={{ padding: 20 }}>
      <h5>Component</h5>
      <DateInput hint="Test hint" label="Test label">
        <DateInput.Day value={value.day} />
        <DateInput.Month value={value.month} />
        <DateInput.Year value={value.year} />
      </DateInput>
    </div>
  );
};

export const ControlledElementWrapper = () => {
  const value = { day: '20', month: '09', year: '1996' };
  return (
    <div style={{ padding: 20 }}>
      <h5>Component</h5>
      <DateInput hint="Test hint" label="Test label" value={value} />
    </div>
  );
};

export const ChangeableControlledElement = () => {
  const [value, setValue] = useState({ day: '20', month: '09', year: '1996' });

  return (
    <div style={{ padding: 20 }}>
      <h5>Component</h5>
      <DateInput
        hint="Test hint"
        label="Test label"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      />
    </div>
  );
};

export default {
  title: 'FormBehaviour/DateInput',
  component: DateInput,
};
