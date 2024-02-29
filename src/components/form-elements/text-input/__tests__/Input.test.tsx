import React from 'react';
import { shallow } from 'enzyme';
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

  it('should do nothing if ref does not exist', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
    const component = shallow(<TextInputComp />);
    component.find('TextInput').simulate('click');
    expect(useRefSpy).toBeCalledWith(null);
  });

  it('should handle click where ref Exists', () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValueOnce({ current: document.createElement('button') });
    const mock = jest.fn();
    const component = shallow(<TextInputComp onHandle={mock} />);
    component.find('TextInput').simulate('click');
    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
  });
});
