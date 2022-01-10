import { mount } from 'enzyme';
import React, { ContextType, useContext } from 'react';
import CheckboxContext from '../CheckboxContext';

describe('CheckboxContext', () => {
  it('returns defaults that do not error when called', () => {
    let context: ContextType<typeof CheckboxContext>;
    const Consumer = () => {
      context = useContext(CheckboxContext);
      return null;
    };

    const wrapper = mount(<Consumer />);

    expect(context.name).toEqual('');
    expect(context.getBoxId('someRef')).toBe(undefined);
    expect(context.setConditional('someRef', true)).toBe(undefined);
    expect(context.leaseReference()).toBe('');
    expect(context.unleaseReference('someRef')).toBe(undefined);

    wrapper.unmount();
  });
});
