import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-test-renderer';
import CheckboxContext from '../../CheckboxContext';
import Box from '../Box';

describe('Box', () => {
  it('renders successfully', () => {
    const context = {
      name: 'test',
      setConditional: jest.fn(),
      getBoxId: jest.fn().mockReturnValue('test-1'),
      leaseReference: jest.fn().mockReturnValue('test-reference'),
      unleaseReference: jest.fn(),
    };

    const wrapper = mount(
      <CheckboxContext.Provider value={context}>
        <Box>Test Box</Box>
      </CheckboxContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(context.leaseReference).toHaveBeenCalledTimes(1);
    expect(context.getBoxId).toHaveBeenCalledTimes(1);
    expect(context.setConditional).toHaveBeenNthCalledWith(1, 'test-reference', false);
    expect(context.unleaseReference).not.toHaveBeenCalled();

    wrapper.unmount();

    expect(context.unleaseReference).toHaveBeenCalledTimes(1);
    expect(context.unleaseReference).toHaveBeenCalledWith('test-reference');
    expect(context.setConditional).toHaveBeenCalledTimes(2);
    expect(context.setConditional).toHaveBeenLastCalledWith('test-reference', false);
  });

  it('shows conditional content on click', () => {
    const context = {
      name: 'test',
      setConditional: jest.fn(),
      getBoxId: jest.fn().mockReturnValue('test-1'),
      leaseReference: jest.fn().mockReturnValue('test-reference'),
      unleaseReference: jest.fn(),
    };

    const wrapper = mount(
      <CheckboxContext.Provider value={context}>
        <Box conditional="Conditional Content">Test Box</Box>
      </CheckboxContext.Provider>,
    );

    expect(context.leaseReference).toHaveBeenCalledTimes(1);
    expect(context.getBoxId).toHaveBeenCalledTimes(1);
    expect(context.setConditional).toHaveBeenNthCalledWith(1, 'test-reference', true);
    expect(context.unleaseReference).not.toHaveBeenCalled();

    expect(wrapper.find('div.nhsuk-radios__conditional').exists()).toBe(false);

    const boxEl = wrapper.find('input');

    act(() => {
      boxEl.simulate('change', { target: { checked: true } });
    });

    const conditionalEl = wrapper.find('div.nhsuk-radios__conditional');
    expect(conditionalEl.exists()).toBe(true);
    expect(conditionalEl.prop('id')).toBe('test-1--conditional');
    expect(conditionalEl.text()).toBe('Conditional Content');

    wrapper.unmount();
  });

  it('shows conditional content if checked by default', () => {
    const context = {
      name: 'test',
      setConditional: jest.fn(),
      getBoxId: jest.fn().mockReturnValue('test-1'),
      leaseReference: jest.fn().mockReturnValue('test-reference'),
      unleaseReference: jest.fn(),
    };

    const wrapper = mount(
      <CheckboxContext.Provider value={context}>
        <Box conditional="Conditional Content" checked>
          Test Box
        </Box>
      </CheckboxContext.Provider>,
    );

    expect(context.leaseReference).toHaveBeenCalledTimes(1);
    expect(context.getBoxId).toHaveBeenCalledTimes(1);
    expect(context.setConditional).toHaveBeenNthCalledWith(1, 'test-reference', true);
    expect(context.unleaseReference).not.toHaveBeenCalled();

    const conditionalEl = wrapper.find('div.nhsuk-radios__conditional');
    expect(conditionalEl.exists()).toBe(true);
    expect(conditionalEl.prop('id')).toBe('test-1--conditional');
    expect(conditionalEl.text()).toBe('Conditional Content');

    wrapper.unmount();
  });

  it('does not render a label when not provided', () => {
    const wrapper = mount(<Box />);
    expect(wrapper.find('.nhsuk-label').exists()).toBe(false);
    wrapper.unmount();
  });

  it('does not change conditional state if checked value is provided', () => {
    const context = {
      name: 'test',
      setConditional: jest.fn(),
      getBoxId: jest.fn().mockReturnValue('test-1'),
      leaseReference: jest.fn().mockReturnValue('test-reference'),
      unleaseReference: jest.fn(),
    };

    const wrapper = mount(
      <CheckboxContext.Provider value={context}>
        <Box conditional="Conditional Content" checked={false}>
          Test Box
        </Box>
      </CheckboxContext.Provider>,
    );

    expect(context.leaseReference).toHaveBeenCalledTimes(1);
    expect(context.getBoxId).toHaveBeenCalledTimes(1);
    expect(context.setConditional).toHaveBeenNthCalledWith(1, 'test-reference', true);
    expect(context.unleaseReference).not.toHaveBeenCalled();

    expect(wrapper.find('div.nhsuk-radios__conditional').exists()).toBe(false);

    const boxEl = wrapper.find('input');

    act(() => {
      boxEl.simulate('change', { target: { checked: true } });
    });

    expect(wrapper.find('div.nhsuk-radios__conditional').exists()).toBe(false);

    wrapper.unmount();
  });

  it('handles event handlers', () => {
    const handleChange = jest.fn();

    const wrapper = mount(
      <Box conditional="Conditional Content" checked={false} onChange={handleChange}>
        Test Box
      </Box>,
    );

    const boxEl = wrapper.find('input');
    act(() => {
      boxEl.simulate('change', { target: { checked: true } });
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.checked).toBe(true);

    wrapper.unmount();
  });

  it('renders hint when provided', () => {
    const wrapper = mount(
      <Box conditional="Conditional Content" checked={false} hint="Test Hint">
        Test Box
      </Box>,
    );

    const hintEl = wrapper.find('div.nhsuk-hint');
    expect(hintEl.exists()).toBe(true);
    expect(hintEl.text()).toBe('Test Hint');

    wrapper.unmount();
  });
});
