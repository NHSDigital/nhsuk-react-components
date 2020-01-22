import React from 'react';
import Panel from '..';
import { mount } from 'enzyme';

describe('Panel', () => {
  it('matches snapshot', () => {
    const element = mount(<Panel></Panel>);
    expect(element).toMatchSnapshot('Panel');
    element.unmount();
  });

  it('adds correct classes when grey', () => {
    const element = mount(<Panel grey></Panel>);
    const renderedElement = element.render();
    expect(renderedElement.hasClass('nhsuk-panel--grey')).toBeTruthy();
    element.unmount();
  });

  it('adds correct attributes when a label is added', () => {
    const element = mount(<Panel label="Label"></Panel>);
    const renderedElement = element.render();
    expect(renderedElement.hasClass('nhsuk-panel-with-label')).toBeTruthy();
    expect(renderedElement.find('.nhsuk-panel-with-label__label').text()).toBe('Label');
    element.unmount();
  });

  describe('Panel.Group', () => {
    it('assigns correct widths', () => {
      const twoColumns = mount(
        <Panel.Group>
          <Panel />
          <Panel />
        </Panel.Group>,
      );
      expect(twoColumns.find('.nhsuk-grid-column-one-half').length).toBe(2);
      twoColumns.unmount();

      const threeColumns = mount(
        <Panel.Group>
          <Panel />
          <Panel />
          <Panel />
        </Panel.Group>,
      );
      expect(threeColumns.find('.nhsuk-grid-column-one-third').length).toBe(3);
      threeColumns.unmount();

      const fourColumns = mount(
        <Panel.Group>
          <Panel />
          <Panel />
          <Panel />
          <Panel />
        </Panel.Group>,
      );
      expect(fourColumns.find('.nhsuk-grid-column-one-quarter').length).toBe(4);
      fourColumns.unmount();

      const fourColumnsWithOther = mount(
        <Panel.Group>
          <Panel />
          <p>Test</p>
          <Panel />
          <Panel />
          <Panel />
        </Panel.Group>,
      );
      expect(fourColumnsWithOther.find('.nhsuk-grid-column-one-quarter').length).toBe(4);
      expect(fourColumnsWithOther.text()).toBe('Test');
      fourColumnsWithOther.unmount();

      const fiveColumns = mount(
        <Panel.Group>
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
        </Panel.Group>,
      );
      expect(fiveColumns.find('.nhsuk-grid-column-full').length).toBe(5);
      fiveColumns.unmount();
    });
  });
});
