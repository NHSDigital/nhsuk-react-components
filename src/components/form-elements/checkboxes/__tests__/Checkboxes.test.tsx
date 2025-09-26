import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import Checkboxes from '../';

describe('Checkboxes', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with string error', () => {
    const { container } = render(
      <Checkboxes id="example" name="example" error="Example error">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with boolean error', () => {
    const { container } = render(
      <Checkboxes id="example" name="example" error={true}>
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with an exclusive checkbox', () => {
    const { container } = render(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        <Checkboxes.Divider />
        <Checkboxes.Item value="none" id="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>,
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const groupRef = createRef<HTMLDivElement>();
    const moduleRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLInputElement>();

    const { container } = render(
      <Checkboxes formGroupProps={{ ref: groupRef }} ref={moduleRef}>
        <Checkboxes.Item ref={fieldRef}>Yes</Checkboxes.Item>
      </Checkboxes>,
    );

    const groupEl = container.querySelectorAll('div')[0];
    const moduleEl = container.querySelectorAll('div')[1];
    const inputEl = container.querySelector('input');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(moduleRef.current).toBe(moduleEl);
    expect(moduleRef.current).toHaveClass('nhsuk-checkboxes');

    expect(fieldRef.current).toBe(inputEl);
    expect(fieldRef.current).toHaveClass('nhsuk-checkboxes__input');
  });

  it('sets data-exclusive attribute when exclusive is true for a checkbox', () => {
    const { container } = render(
      <Checkboxes id="example" name="example">
        <Checkboxes.Item value="animal">Waste from animal carcasses</Checkboxes.Item>
        <Checkboxes.Item value="mines">Waste from mines or quarries</Checkboxes.Item>
        <Checkboxes.Item value="farm">Farm or agricultural waste</Checkboxes.Item>
        <Checkboxes.Item value="none" id="none" exclusive>
          None
        </Checkboxes.Item>
      </Checkboxes>,
    );

    expect(container.querySelector('#none')?.getAttribute('data-checkbox-exclusive')).toBe('true');
  });
});
