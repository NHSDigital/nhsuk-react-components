import { mount } from 'enzyme';
import React from 'react';
import LabelBlock from '../LabelBlock';

describe('LabelBlock', () => {
  it.skip('renders a label element when label is provided and passes props', () => {
    const wrapper = mount(
      <LabelBlock
        elementId="test-element"
        label="Test Label"
        labelProps={{ 'aria-label': 'Test Aria Label' }}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    const labelEl = wrapper.find('label.nhsuk-label');

    expect(labelEl.exists()).toBe(true);
    expect(labelEl.text()).toEqual('Test Label');
    expect(labelEl.prop('id')).toEqual('test-element--label');
    expect(labelEl.prop('aria-label')).toEqual('Test Aria Label');

    wrapper.unmount();
  });

  it.skip('renders a hint element when hint is provided and passes props', () => {
    const wrapper = mount(
      <LabelBlock
        elementId="test-element"
        hint="Test Hint"
        hintProps={{ 'aria-label': 'Test Aria Label for Hint' }}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    const hintEl = wrapper.find('div.nhsuk-hint');

    expect(hintEl.exists()).toBe(true);
    expect(hintEl.text()).toEqual('Test Hint');
    expect(hintEl.prop('id')).toEqual('test-element--hint');
    expect(hintEl.prop('aria-label')).toEqual('Test Aria Label for Hint');

    wrapper.unmount();
  });

  it.skip('renders an errormessage element when error is provided and passes props', () => {
    const wrapper = mount(
      <LabelBlock
        elementId="test-element"
        error="Test Error"
        errorProps={{ 'aria-label': 'Test Aria Label for Error' }}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    const errorEl = wrapper.find('span.nhsuk-error-message');

    expect(errorEl.exists()).toBe(true);
    expect(errorEl.text()).toEqual('Error: Test Error');
    expect(errorEl.prop('id')).toEqual('test-element--error-message');
    expect(errorEl.prop('aria-label')).toEqual('Test Aria Label for Error');

    wrapper.unmount();
  });

  it('does not render an errormessage element when error is provided but is boolean', () => {
    const wrapper = mount(<LabelBlock error={true} />);

    expect(wrapper).toMatchSnapshot();

    const errorEl = wrapper.find('.nhsuk-error-message');
    expect(errorEl.exists()).toBe(false);

    wrapper.unmount();
  });

  it.skip('does not add elementId to elements if no ID is provided', () => {
    const wrapper = mount(<LabelBlock label="Test Label" hint="Test Hint" error="Test Error" />);

    const labelEl = wrapper.find('label.nhsuk-label');
    const hintEl = wrapper.find('div.nhsuk-hint');
    const errorEl = wrapper.find('span.nhsuk-error-message');

    expect(labelEl.prop('id')).toBe(undefined);
    expect(hintEl.prop('id')).toBe(undefined);
    expect(errorEl.prop('id')).toBe(undefined);
  });

  it('renders nothing when no details passed', () => {
    const wrapper = mount(<LabelBlock elementId="test-id" />);
    expect(wrapper.isEmptyRender()).toBe(true);
    wrapper.unmount();
  });
});
