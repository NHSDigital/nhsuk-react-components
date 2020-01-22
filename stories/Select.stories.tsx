/* eslint-disable import/no-extraneous-dependencies */
import React, { MouseEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { Select, Form, Button, Input } from '../src';

const stories = storiesOf('Select', module);

stories
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
  .add('With Error (Boolean)', () => {
    const [error, setError] = React.useState<boolean>(true);
    return (
      <>
        <Form>
          <Select error={error} label="Label text goes here">
            <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
            <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
            <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
          </Select>
        </Form>
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
        <Form>
          <Select error={error} label="Label text goes here">
            <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
            <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
            <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
          </Select>
        </Form>
        <Input onChange={e => setError(e.currentTarget.value)} value={error}></Input>
      </>
    );
  });
