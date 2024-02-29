import React, { useState } from 'react';
import { DateInput } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateInput> = {
  title: 'Form Elements/DateInput',
  component: DateInput,
};
export default meta;
type Story = StoryObj<typeof DateInput>;

export const Standard: Story = {
  render: (args) => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput
        onChange={(e) => console.log(e.target.value)}
        hint="Test hint"
        label="Test label"
      />
    </div>
  ),
};

export const StandardWithError: Story = {
  render: (args) => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput
        onChange={(e) => console.log(e.target.value)}
        error="Test Error"
        hint="Test hint"
        label="Test label"
      />
      <h5>Component with specific field errors</h5>

      <DateInput
        onChange={(e) => console.log(e.target.value)}
        error="Test Error"
        hint="Test hint"
        label="Test label"
      >
        <DateInput.Day error={false} />
        <DateInput.Month />
        <DateInput.Year />
      </DateInput>
    </div>
  ),
};

export const PrePopulatedIndividualComponents: Story = {
  render: (args) => {
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
  },
};

export const PrePopulatedWrapper: Story = {
  render: (args) => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" defaultValue={defaultValue} />
      </div>
    );
  },
};

export const ControlledElementIndividualComponents: Story = {
  render: (args) => {
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
  },
};

export const ControlledElementWrapper: Story = {
  render: (args) => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" value={value} />
      </div>
    );
  },
};

export const ChangeableControlledElement: Story = {
  render: function ChangeableControlledElementRender() {
    const [value, setValue] = useState({ day: '20', month: '09', year: '1996' });

    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <DateInput
          hint="Test hint"
          label="Test label"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
    );
  },
};
