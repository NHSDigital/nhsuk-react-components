import type { Story } from '@storybook/react';
import React from 'react';
import { DateInput, Fieldset, FormGroup } from '../src';

export const StandardDateInput: Story = ({ id, label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${id}--hint`} role="group">
      <Fieldset.Legend>{label}</Fieldset.Legend>
      <DateInput id={id} {...restArgs} />
    </Fieldset>
  </FormGroup>
);
StandardDateInput.args = {
  id: 'dob',
  label: 'What is your date of birth?',
  hint: 'For example, 31, 3, 1980',
};

export const WithAutocompleteAttribute: Story = ({ id, label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${id}--hint`} role="group">
      <Fieldset.Legend>{label}</Fieldset.Legend>
      <DateInput {...restArgs} id={id}>
        <DateInput.Day autoComplete="bday-day" />
        <DateInput.Month autoComplete="bday-month" />
        <DateInput.Year autoComplete="bday-year" />
      </DateInput>
    </Fieldset>
  </FormGroup>
);
WithAutocompleteAttribute.args = {
  id: 'dob',
  label: 'What is your date of birth?',
  hint: 'For example, 31, 3, 1980',
};

export const WithErrors: Story = ({ id, label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${id}--hint ${id}--error-message`} role="group">
      <Fieldset.Legend>{label}</Fieldset.Legend>
      <DateInput {...restArgs} />
    </Fieldset>
  </FormGroup>
);
WithErrors.args = {
  id: 'dob-errors',
  label: 'What is your date of birth?',
  hint: 'For example, 31, 3, 1980',
  error: 'Error message goes here',
};

export const WithErrorOnSingleInput: Story = ({ id, label, ...restArgs }) => (
  <FormGroup>
    <Fieldset aria-describedby={`${id}--hint ${id}--error-message`} role="group">
      <Fieldset.Legend>{label}</Fieldset.Legend>
      <DateInput {...restArgs}>
        <DateInput.Day error={true} />
        <DateInput.Month error={false} />
        <DateInput.Year error={false} />
      </DateInput>
    </Fieldset>
  </FormGroup>
);
WithErrorOnSingleInput.args = {
  id: 'dob-day-error',
  label: 'What is your date of birth?',
  hint: 'For example, 31, 3, 1980',
  error: 'Error message goes here',
};

export default {
  title: 'Components/DateInput',
  component: DateInput,

  argTypes: { onChange: { action: 'changed' } },
};
