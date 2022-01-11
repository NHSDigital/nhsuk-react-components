import { shallow } from 'enzyme';
import React from 'react';
import Fieldset from '..';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const element = shallow(<Fieldset>Text</Fieldset>);
    expect(element.text()).toBe('Text');
    expect(element).toMatchSnapshot('Fieldset');
    element.unmount();
  });

  describe('Fieldset.Legend', () => {
    it('matches snapshot', () => {
      const element = shallow(<Fieldset.Legend>Text</Fieldset.Legend>);
      expect(element).toMatchSnapshot('FieldsetLegend');
      element.unmount();
    });

    it('renders as page heading', () => {
      const element = shallow(<Fieldset.Legend isPageHeading>Text</Fieldset.Legend>);

      expect(element.find('.nhsuk-fieldset__heading').render().text()).toBe('Text');
      element.unmount();
    });
  });
});
