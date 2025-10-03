import { render } from '@testing-library/react';
import { LedeText } from '..';

describe('LedeText', () => {
  it('matches snapshot', () => {
    const { container } = render(<LedeText>Text</LedeText>);

    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<LedeText>Text</LedeText>);

    expect(container.textContent).toBe('Text');
    expect(container.querySelector('.nhsuk-lede-text')).toBeTruthy();
  });
});
