/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateInput } from '../../src';

const stories = storiesOf('FormElementBehaviour: DateInput', module);

stories.add('Standard', () => (
  <div style={{ padding: 20 }}>
    <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
    <h5>Expected Behaviour</h5>
    <ul className="nhsuk-hint">
      <li>OnChange Handlers are fired using the generated IDs and Names</li>
      <li>The value is passed through</li>
    </ul>
    <h5>Component</h5>
    <DateInput onChange={e => console.log(e.target.value)}>
      <DateInput.Day />
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
  </div>
));
