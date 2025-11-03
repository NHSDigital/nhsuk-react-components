import { createRef } from 'react';

import { Select } from '..';

import { renderClient, renderServer } from '#util/components';

describe('Select', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Select id="test-select">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
      { className: 'nhsuk-select' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Select id="test-select">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
      { className: 'nhsuk-select' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-select',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLSelectElement>();

    const { container } = await renderClient(
      <Select formGroupProps={{ ref: groupRef }} ref={fieldRef} />,
      { className: 'nhsuk-select' },
    );

    const groupEl = container.querySelector('div');
    const selectEl = container.querySelector('select');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(fieldRef.current).toBe(selectEl);
    expect(fieldRef.current).toHaveClass('nhsuk-select');
  });

  it('sets the error class when error message is provided', async () => {
    const { modules } = await renderClient(
      <>
        <Select error={undefined} />
        <Select error={'Select a location'} />
      </>,
      { className: 'nhsuk-select' },
    );

    const [selectEl1, selectEl2] = modules;

    expect(selectEl1).not.toHaveClass('nhsuk-select--error');
    expect(selectEl2).toHaveClass('nhsuk-select--error');
  });

  it('should handle DOM events where ref exists', async () => {
    const ref = createRef<HTMLSelectElement>();
    const mock = jest.fn();

    const handleClick = () => {
      if (!ref.current) return;
      mock();
    };

    const { modules } = await renderClient(<Select onClick={handleClick} ref={ref} />, {
      className: 'nhsuk-select',
    });

    const [selectEl] = modules;
    selectEl.click();

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
