import { Button, ErrorMessage, FormGroup, Hint, Input, Label, Select } from '../src';
import React, { MouseEvent } from 'react';

export const Standard = () => (
  <Select id="select-1" label="Label text goes here">
    <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
    <Select.Option value="2" selected>
      NHS.UK frontend option 2
    </Select.Option>
    <Select.Option value="3" disabled>
      NHS.UK frontend option 3
    </Select.Option>
  </Select>
);

export const SelectWithHintText = () => (
  <Select label="Label text goes here" hint="Hint text goes here">
    <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
    <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
    <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
  </Select>
);

export const SelectWithErrorBoolean = () => {
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
};
SelectWithErrorBoolean.storyName = 'Select With Error (Boolean)';

export const SelectWithErrorString = () => {
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
};
SelectWithErrorString.storyName = 'Select With Error (String)';

export const SelectWithFormGroupAndHint = () => (
  <>
    <FormGroup>
      <Hint>This is hint</Hint>
      <Select>
        <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
        <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
        <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
      </Select>
    </FormGroup>
  </>
);
SelectWithFormGroupAndHint.storyName = 'Select With Form Group and Hint text';

export const SelectWithFormGroupLabelAndHint = () => (
  <>
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
  </>
);
SelectWithFormGroupLabelAndHint.storyName = 'Select With Form Group, Label and Hint text';

export default {
  title: 'Components/Select',
  component: Select,
};
