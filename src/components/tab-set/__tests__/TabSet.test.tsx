import React from 'react';
import {render} from '@testing-library/react'
import TabSet from '..';

describe('TabSet', () => {
  it('matches snapshot', () => {
    const component = render(<TabSet />)
    expect(component.container).toMatchSnapshot();
  });

  describe('Tab', () => {
    it('matches snapshot', () => {
      const component = render(<TabSet.Tab />);
      expect(component.container).toMatchSnapshot();
    });

    it('applies correct classes', () => {
      const component = render(
        <TabSet>
          <TabSet.Tab id="normal">Text</TabSet.Tab>
          <TabSet.Tab id="disabled" disabled>
            Disabled
          </TabSet.Tab>
          <TabSet.Tab id="active" active>
            Active
          </TabSet.Tab>
          <TabSet.Tab id="empty" empty>
            Empty
          </TabSet.Tab>
        </TabSet>,
      );

      expect(component.container.querySelector('#normal')?.className).toBe(
        'nhsuk-tab-set__tab')
      expect(component.container.querySelector('#disabled')?.className).toBe(
        'nhsuk-tab-set__tab nhsuk-tab-set__tab--disabled')
      expect(component.container.querySelector('#active')?.className).toBe(
        'nhsuk-tab-set__tab nhsuk-tab-set__tab--active')
      expect(component.container.querySelector('#empty')?.className).toBe(
        'nhsuk-tab-set__tab nhsuk-tab-set__tab--empty')
    });
  });
});
