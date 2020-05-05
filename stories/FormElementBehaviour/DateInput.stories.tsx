/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput, Form } from '../../src';

const stories = storiesOf('FormElementBehaviour: DateInput', module);

stories
  .add('Standard', () => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <Form>
        <DateInput
          onChange={e => console.log(e.target.value)}
          hint="Test hint"
          label="Test label"
        />
      </Form>
    </div>
  ))
  .add('Standard with Error', () => (
    <div style={{ padding: 20 }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <Form error>
        <DateInput
          onChange={e => console.log(e.target.value)}
          error="Test Error"
          hint="Test hint"
          label="Test label"
        />
      </Form>
      <h5>Component with specific field errors</h5>
      <Form error>
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
      </Form>
    </div>
  ))
  .add('Pre-populated (Individual Components)', () => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <Form>
          <DateInput hint="Test hint" label="Test label">
            <DateInput.Day defaultValue={defaultValue.day} />
            <DateInput.Month defaultValue={defaultValue.month} />
            <DateInput.Year defaultValue={defaultValue.year} />
          </DateInput>
        </Form>
      </div>
    );
  })
  .add('Pre-populated (Wrapper)', () => {
    const defaultValue = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <Form>
          <DateInput hint="Test hint" label="Test label" defaultValue={defaultValue} />
        </Form>
      </div>
    );
  })
  .add('Controlled Element (Individual Components)', () => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <Form>
          <DateInput hint="Test hint" label="Test label">
            <DateInput.Day value={value.day} />
            <DateInput.Month value={value.month} />
            <DateInput.Year value={value.year} />
          </DateInput>
        </Form>
      </div>
    );
  })
  .add('Controlled Element (Wrapper)', () => {
    const value = { day: '20', month: '09', year: '1996' };
    return (
      <div style={{ padding: 20 }}>
        <h5>Component</h5>
        <Form>
          <DateInput hint="Test hint" label="Test label" value={value} />
        </Form>
      </div>
    );
  });
