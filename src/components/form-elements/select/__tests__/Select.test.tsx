import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from '../Select';

describe('Select', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const SelectComp = ({ onHandle }: { onHandle: () => void }) => {
    const ref = React.useRef<HTMLSelectElement | null>(null);
    const handleClick = () => {
      if (!ref.current) return;
      onHandle();
    };

    return <Select onClick={handleClick} selectRef={ref} />;
  };

  // further tests need to be added as part of NUT-4646

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
