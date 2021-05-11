import Input from '../Input';
import React from 'react';
import { shallow } from 'enzyme';

describe('Input', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const InputComp = ({ onHandle }: { onHandle: () => void }) => {
    const ref = React.useRef(null);
    const handleClick = () => {
      if (!ref.current) return;
      onHandle();
    };

    return <Input type="button" onClick={handleClick} inputRef={ref}></Input>;
  };

  it('should do nothing if ref does not exist', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
    const component = shallow(<InputComp />);
    component.find('Input').simulate('click');
    expect(useRefSpy).toBeCalledWith(null);
  });

  it('should handle click where ref Exists', () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: document.createElement('button') });
    const mock = jest.fn();
    const component = shallow(<InputComp onHandle={mock} />);
    component.find('Input').simulate('click');
    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
  });
});
