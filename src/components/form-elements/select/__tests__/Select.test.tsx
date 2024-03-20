import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '../Select';

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

    return <Select onClick={handleClick} selectRef={ref} />;
  };

  it('Matches the snapshot', () => {
    const { container } = render(
      <Select id="test-select">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
    );

    expect(container).toMatchSnapshot();
  });

  it.each([true, false])('Adds the appropriate class if error is specified as %s', (error) => {
    const { container } = render(<Select id="test-select" error={error} />);

    if (error) {
      expect(container.querySelector('#test-select')).toHaveClass('nhsuk-select--error');
    } else {
      expect(container.querySelector('#test-select')).not.toHaveClass('nhsuk-select--error');
    }
  });

  it('should handle DOM events where ref Exists', () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: document.createElement('select') });
    const mock = jest.fn();
    const { container } = render(<SelectComp onHandle={mock} />);

    const selectEl = container.querySelector('select')!;
    fireEvent.click(selectEl);

    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
  });
});
