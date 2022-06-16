import { mount } from 'enzyme';
import React from 'react';
import Checkboxes from '../Checkboxes';

describe('Checkboxes', () => {
  it('matches snapshot', () => {
    const element = mount(
      <Checkboxes id="example" name="example">
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>,
    );
    expect(element).toMatchSnapshot();
    element.unmount();
  });

  it('matches snapshot with string error', () => {
    const element = mount(
      <Checkboxes id="example" name="example" error="Example error">
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>,
    );
    expect(element).toMatchSnapshot();
    element.unmount();
  });

  it('matches snapshot with boolean error', () => {
    const element = mount(
      <Checkboxes id="example" name="example" error={true}>
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>,
    );
    expect(element).toMatchSnapshot();
    element.unmount();
  });
});
