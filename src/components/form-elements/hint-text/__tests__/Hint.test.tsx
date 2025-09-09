import React from 'react';
import { render } from '@testing-library/react';
import Hint from '../';

describe('Hint', () => {
  it('matches snapshot', () => {
    const { container } = render(<Hint>Text</Hint>);

    expect(container).toMatchSnapshot('Hint');
  });

  it('renders children', () => {
    const { container } = render(<Hint>Text</Hint>);

    expect(container.textContent).toBe('Text');
  });

  it('renders null with no children', () => {
    const { container } = render(<Hint />);

    expect(container.querySelector('div')).toBeNull();
  });
});
