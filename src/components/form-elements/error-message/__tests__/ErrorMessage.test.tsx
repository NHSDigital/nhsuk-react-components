import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from '../';

describe('ErrorMessage', () => {
  it('matches snapshot', () => {
    const { container } = render(<ErrorMessage>Error</ErrorMessage>);

    expect(container).toMatchSnapshot('ErrorMessage');
  });

  it('has default visuallyHiddenText', () => {
    const { container } = render(<ErrorMessage>Error</ErrorMessage>);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Error: ');
  });

  it('has disabled visuallyHiddenText', () => {
    const { container } = render(<ErrorMessage visuallyHiddenText={false}>Error</ErrorMessage>);

    expect(container.querySelector('.nhsuk-u-visually-hidden')).toBeFalsy();
  });

  it('has custom visuallyHiddenText', () => {
    const { container } = render(<ErrorMessage visuallyHiddenText="Custom">Error</ErrorMessage>);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Custom');
  });
});
