import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TextInput from '../TextInput';

describe('TextInput', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const TextInputComp = ({ onHandle }: { onHandle: () => void }) => {
    const ref = React.useRef(null);
    const handleClick = () => {
      if (!ref.current) return;
      onHandle();
    };

    return <TextInput type="button" onClick={handleClick} inputRef={ref} />;
  };

  // further tests need to be added as part of NUT-4646

  it('should handle click where ref Exists', () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: document.createElement('button') });
    const mock = jest.fn();
    const { container } = render(<TextInputComp onHandle={mock} />);

    const textInputEl = container.querySelector('input')!;
    fireEvent.click(textInputEl);

    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
  });
});
