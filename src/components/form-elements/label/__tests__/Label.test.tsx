import React from 'react';
import { render } from '@testing-library/react';
import Label from '../Label';

describe('Label', () => {
  it('can be defaulted', () => {
    const { container } = render(<Label>Text</Label>);

    expect(container.textContent).toBe('Text');
    expect(container.innerHTML).toBe('<label class="nhsuk-label">Text</label>');
  });

  it('can render with size m', () => {
    const { container } = render(<Label size="m">Text</Label>);

    expect(container.textContent).toBe('Text');
    expect(container.innerHTML).toBe('<label class="nhsuk-label nhsuk-label--m">Text</label>');
  });

  it('can render with heading prop', () => {
    const { container } = render(<Label isPageHeading>Text</Label>);

    expect(container.querySelector('.nhsuk-label.nhsuk-label--xl')?.textContent).toBe('Text');
    expect(container.innerHTML).toBe(
      '<h1 class="nhsuk-label-wrapper"><label class="nhsuk-label nhsuk-label--xl">Text</label></h1>',
    );
  });
});
