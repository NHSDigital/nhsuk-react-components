import React from 'react';
import { render } from '@testing-library/react';
import Fieldset from '../';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const { container } = render(<Fieldset>Text</Fieldset>);

    expect(container).toMatchSnapshot('Fieldset');
  });

  it('renders children', () => {
    const { container } = render(<Fieldset>Text</Fieldset>);

    expect(container.textContent).toBe('Text');
  });

  describe('Fieldset.Legend', () => {
    it('matches snapshot', () => {
      const { container } = render(<Fieldset.Legend>Text</Fieldset.Legend>);

      expect(container).toMatchSnapshot('FieldsetLegend');
    });

    it('renders as page heading', () => {
      const { container } = render(<Fieldset.Legend isPageHeading>Text</Fieldset.Legend>);

      expect(container.querySelector('.nhsuk-fieldset__legend--xl')).toBeTruthy();
      expect(container.querySelector('.nhsuk-fieldset__heading')?.textContent).toBe('Text');
    });
  });
});
