import { Button, ErrorMessage, FormGroup, Hint, Input, Label, Select } from '../src';
/* eslint-disable import/no-extraneous-dependencies */
import React, { MouseEvent } from 'react';

import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Select', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <Select id="select-1" label="Label text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2" selected>
        NHS.UK frontend option 2
      </Select.Option>
      <Select.Option value="3" disabled>
        NHS.UK frontend option 3
      </Select.Option>
    </Select>
  ))
  .add('With hint text', () => (
    <Select label="Label text goes here" hint="Hint text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
    </Select>
  ))
  .add('With form group and hint text', () => (
    <FormGroup>
      <Hint>This is hint</Hint>
      <Select>
        <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
        <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
        <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
      </Select>
    </FormGroup>
  ))
  .add('With form group , label, hint text', () => (
    <FormGroup>
      <Label>Please select</Label>
      <Hint>This is hint</Hint>
      <ErrorMessage>Empty not allowed</ErrorMessage>
      <Select>
        <Select.Option>Select</Select.Option>
        <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
        <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
        <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
      </Select>
    </FormGroup>
  ))
  .add('With Error (Boolean)', () => {
    const [error, setError] = React.useState<boolean>(true);
    return (
      <>
        <Select error={error} label="Label text goes here">
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  })
  .add('With Error (String)', () => {
    const [error, setError] = React.useState<string>('Error message goes here');
    return (
      <>
        <Select error={error} label="Label text goes here">
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Input onChange={e => setError(e.currentTarget.value)} value={error} />
      </>
    );
  });