import React, { createRef, useRef } from 'react';
import { render } from '@testing-library/react';
import Select from '../Select';
import { renderClient, renderServer } from '@util/components';

describe('Select', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const SelectComp = ({ onHandle }: { onHandle: () => void }) => {
    const ref = useRef<HTMLSelectElement | null>(null);
    const handleClick = () => {
      if (!ref.current) return;
      onHandle();
    };

    return <Select onClick={handleClick} ref={ref} />;
  };

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

  it.each([true, false])(
    'Adds the appropriate class if error is specified as %s',
    async (error) => {
      const { container } = await renderClient(<Select id="test-select" error={error} />, {
        className: 'nhsuk-select',
      });

      if (error) {
        expect(container.querySelector('#test-select')).toHaveClass('nhsuk-select--error');
      } else {
        expect(container.querySelector('#test-select')).not.toHaveClass('nhsuk-select--error');
      }
    },
  );

  it('should handle DOM events where ref Exists', () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: document.createElement('select') });
    const mock = jest.fn();
    const { container } = render(<SelectComp onHandle={mock} />);

    const selectEl = container.querySelector('select')!;
    selectEl.click();

    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
  });
});
