import { render } from '@testing-library/react';
import { ErrorMessage } from '..';

describe('ErrorMessage', () => {
  it('matches snapshot', () => {
    const { container } = render(<ErrorMessage>Error</ErrorMessage>);

    expect(container).toMatchSnapshot('ErrorMessage');
  });

  it('has default visuallyHiddenText', () => {
    const { container } = render(<ErrorMessage>Error</ErrorMessage>);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Error:');
  });

  it('has custom visuallyHiddenText', () => {
    const { container } = render(<ErrorMessage visuallyHiddenText="Custom">Error</ErrorMessage>);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Custom:');
  });

  it('has empty visuallyHiddenText', () => {
    const { container } = render(<ErrorMessage visuallyHiddenText="">Error</ErrorMessage>);

    expect(container.querySelector('.nhsuk-u-visually-hidden')).toBeFalsy();
  });
});
