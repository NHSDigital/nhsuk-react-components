import { render } from '@testing-library/react';

import { ErrorMessage } from '..';

describe('ErrorMessage', () => {
  it('matches snapshot', () => {
    const { container } = render(<ErrorMessage>Enter NHS number</ErrorMessage>);

    expect(container).toMatchSnapshot('ErrorMessage');
  });

  it('has default visually hidden text', () => {
    const { container } = render(<ErrorMessage>Enter NHS number</ErrorMessage>);

    const errorMessageEl = container.querySelector('.nhsuk-error-message');
    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(errorMessageEl).toHaveTextContent('Error: Enter NHS number');
    expect(visuallyHiddenEl).toHaveTextContent('Error:');
  });

  it('has custom visually hidden text', () => {
    const { container } = render(
      <ErrorMessage visuallyHiddenText="Custom">Enter NHS number</ErrorMessage>,
    );

    const errorMessageEl = container.querySelector('.nhsuk-error-message');
    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(errorMessageEl).toHaveTextContent('Custom: Enter NHS number');
    expect(visuallyHiddenEl).toHaveTextContent('Custom:');
  });

  it('has custom visually hidden HTML', () => {
    const { container } = render(
      <ErrorMessage
        visuallyHiddenText={
          <>
            Custom <em>with HTML</em>
          </>
        }
      >
        Enter NHS number
      </ErrorMessage>,
    );

    const errorMessageEl = container.querySelector('.nhsuk-error-message');
    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(errorMessageEl).toHaveTextContent('Custom with HTML: Enter NHS number');
    expect(visuallyHiddenEl).toHaveTextContent('Custom with HTML:');
    expect(visuallyHiddenEl).toContainHTML('Custom <em>with HTML</em>:');
  });

  it('has empty visually hidden text', () => {
    const { container } = render(
      <ErrorMessage visuallyHiddenText="">Enter NHS number</ErrorMessage>,
    );

    const errorMessageEl = container.querySelector('.nhsuk-error-message');
    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(errorMessageEl).toHaveTextContent('Enter NHS number');
    expect(visuallyHiddenEl).not.toBeInTheDocument();
  });
});
