import React from 'react';
import { render } from '@testing-library/react';
import Checkboxes from '../';

describe('Checkboxes', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example">
          <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
          <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
          <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with string error', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example" error="Example error">
          <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
          <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
          <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with boolean error', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example" error={true}>
          <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
          <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
          <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Matches the snapshot with an exclusive checkbox', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example">
          <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
          <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
          <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
          <Checkboxes.Divider />
          <Checkboxes.Item value="none" id="none" exclusive>
            None
          </Checkboxes.Item>
        </Checkboxes>
      </form>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Sets a data-exclusive attribute when exclusive is true for a box', () => {
    const { container } = render(
      <form>
        <Checkboxes id="example" name="example">
          <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
          <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
          <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
          <Checkboxes.Item value="none" id="none" exclusive>
            None
          </Checkboxes.Item>
        </Checkboxes>
      </form>,
    );

    expect(container.querySelector('#none')?.getAttribute('data-checkbox-exclusive')).toBe('true');
  });
});
