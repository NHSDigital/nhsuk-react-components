import React from 'react';
import { render } from '@testing-library/react';
import Images from '../';

describe('Images', () => {
  it('matches snapshot', () => {
    const { container } = render(<Images />);

    expect(container.querySelector('.nhsuk-image')).toBeTruthy();
    expect(container).toMatchSnapshot('Images');
  });

  it('renders caption', () => {
    const { container } = render(<Images caption="Caption" />);

    expect(container.querySelector('figcaption')).toBeTruthy();
    expect(container.querySelector('figcaption.nhsuk-image__caption')).toBeTruthy();
    expect(container.querySelector('figcaption')?.textContent).toBe('Caption');
  });
});
