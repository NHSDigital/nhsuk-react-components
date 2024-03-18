import React from 'react';
import { render } from '@testing-library/react';
import Checkboxes from '../Checkboxes';

describe('Checkboxes', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example">
          <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
          <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
          <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with string error', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example" error="Example error">
          <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
          <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
          <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with boolean error', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example" error={true}>
          <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
          <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
          <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Matches the snapshot with an exclusive checkbox', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example">
          <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
          <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
          <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          <Checkboxes.Divider />
          <Checkboxes.Box value="none" id="none" exclusive>
            None
          </Checkboxes.Box>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Sets a data-exclusive attribute when exclusive is true for a box', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example">
          <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
          <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
          <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          <Checkboxes.Box value="none" id="none" exclusive>
            None
          </Checkboxes.Box>
        </Checkboxes>
      </form>,
    );

    expect(container.querySelector('#none')?.getAttribute('data-checkbox-exclusive')).toBe('true');
  });
});
