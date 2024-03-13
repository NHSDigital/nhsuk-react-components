import React from 'react';
import { render } from '@testing-library/react';
import Checkboxes from '../Checkboxes';

describe('Checkboxes', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Checkboxes id="example" name="example">
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with string error', () => {
    const { container } = render(
      <Checkboxes id="example" name="example" error="Example error">
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with boolean error', () => {
    const { container } = render(
      <Checkboxes id="example" name="example" error={true}>
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });
});
