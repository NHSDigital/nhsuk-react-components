import React from 'react';
import { shallow } from 'enzyme';
import FormGroup from '..';
import Label from '../../label';
import ErrorMessage from '../../error-message';
import Hint from '../../hint';
import Input from '../../input';
import Textarea from '../../textarea';
import Select from '../../select';

describe('Form Group', () => {
  it('matches snapshot Form group and label', () => {
    const element = shallow(
      <FormGroup>
        <Label>Please specify (others)</Label>
      </FormGroup>,
    );
    expect(element).toMatchSnapshot();
  });

  it('matches snapshot Form group, label and Hint', () => {
    const element = shallow(
      <FormGroup>
        <Label>Please specify (others)</Label>
        <Hint>Hint: Use this box to specify more</Hint>
      </FormGroup>,
    );
    expect(element).toMatchSnapshot();
  });

  it('matches snapshot Form group label and Textarea', () => {
    const element = shallow(
      <FormGroup>
        <Label>Please specify (others)</Label>
        <Hint>Hint: Use this box to specify more</Hint>
        <Textarea
          id="no-ni-reason2"
          name="no-ni-reason2"
          rows={5}
          label="Why can&#39;t you provide a National Insurance number?"
        />
      </FormGroup>,
    );
    expect(element).toMatchSnapshot();
  });

  it('matches snapshot Form group label , Textarea and Error message', () => {
    const element = shallow(
      <FormGroup>
        <Label>Please specify (others)</Label>
        <Hint>Hint: Use this box to specify more</Hint>
        <ErrorMessage>At least 20 characters...</ErrorMessage>
        <Textarea
          id="no-ni-reason2"
          name="no-ni-reason2"
          rows={5}
          label="Why can&#39;t you provide a National Insurance number?"
        />
      </FormGroup>,
    );
    expect(element).toMatchSnapshot();
  });

  it('matches snapshot Form group label , Input and Error message', () => {
    const element = shallow(
      <FormGroup>
        <Label>Please specify (others)</Label>
        <Hint>Hint: Use this box to specify more</Hint>
        <ErrorMessage>At least 20 characters...</ErrorMessage>
        <Input id="input-id4" width="10" />
      </FormGroup>,
    );
    expect(element).toMatchSnapshot();
  });

  it('matches snapshot Form group label , Select and Error message', () => {
    const element = shallow(
      <FormGroup>
        <Label>Please specify (others)</Label>
        <Hint>Hint: Use this box to specify more</Hint>
        <ErrorMessage>At least 20 characters...</ErrorMessage>
        <Select>
          <Select.Option>Select</Select.Option>
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
      </FormGroup>,
    );
    expect(element).toMatchSnapshot();
  });
});
