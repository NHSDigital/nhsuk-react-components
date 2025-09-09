import React from 'react';
import { render } from '@testing-library/react';
import Legend from '..';

describe('Legend', () => {
  it('matches snapshot', () => {
    const { container } = render(<Legend>Text</Legend>);

    expect(container).toMatchSnapshot('Legend');
  });

  it('renders as page heading', () => {
    const { container } = render(<Legend isPageHeading>Text</Legend>);

    expect(container.querySelector('.nhsuk-fieldset__legend--xl')).toBeTruthy();
    expect(container.querySelector('.nhsuk-fieldset__heading')?.textContent).toBe('Text');
  });
});
