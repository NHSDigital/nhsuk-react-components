import { mount } from 'enzyme';
import React from 'react';
import Checkboxes from '../Checkboxes';

describe('Checkboxes', () => {
  it('renders without errors', () => {
    const wrapper = mount(
      <Checkboxes id="test-id">
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
      </Checkboxes>,
    );

    expect(wrapper).toMatchSnapshot();

    const allBoxes = wrapper.find(Checkboxes.Box);

    expect(allBoxes).toHaveLength(3);

    const firstBoxInput = allBoxes.at(0).find('input');
    expect(firstBoxInput.exists()).toBe(true);
    expect(firstBoxInput.prop('id')).toBe('test-id-1');
    expect(firstBoxInput.prop('name')).toBe('test-id');
    expect(firstBoxInput.prop('type')).toBe('checkbox');
    expect(firstBoxInput.prop('value')).toBe('british');

    const secondBoxInput = allBoxes.at(1).find('input');
    expect(secondBoxInput.exists()).toBe(true);
    expect(secondBoxInput.prop('id')).toBe('test-id-2');
    expect(secondBoxInput.prop('name')).toBe('test-id');
    expect(secondBoxInput.prop('type')).toBe('checkbox');
    expect(secondBoxInput.prop('value')).toBe('irish');

    const thirdBoxInput = allBoxes.at(2).find('input');
    expect(thirdBoxInput.exists()).toBe(true);
    expect(thirdBoxInput.prop('id')).toBe('test-id-3');
    expect(thirdBoxInput.prop('name')).toBe('test-id');
    expect(thirdBoxInput.prop('type')).toBe('checkbox');
    expect(thirdBoxInput.prop('value')).toBe('other');

    wrapper.unmount();
  });

  it('adds conditional class when a box contains conditional content', () => {
    const wrapper = mount(
      <Checkboxes id="test-id">
        <Checkboxes.Box conditional={<>Conditional Content</>}>British</Checkboxes.Box>
      </Checkboxes>,
    );

    const checkboxesEl = wrapper.find('div.nhsuk-checkboxes');
    expect(checkboxesEl.hasClass('nhsuk-checkboxes--conditional')).toBe(true);

    wrapper.unmount();
  });
});
