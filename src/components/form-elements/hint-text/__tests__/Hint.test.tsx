import { render } from '@testing-library/react';
import React from 'react';
import { HintText } from '..';

describe('Hint', () => {
  it('matches snapshot', () => {
    const { container } = render(<HintText>Text</HintText>);

    expect(container).toMatchSnapshot('Hint');
  });

  it('renders children', () => {
    const { container } = render(<HintText>Text</HintText>);

    expect(container.textContent).toBe('Text');
  });

  it('renders null with no children', () => {
    const { container } = render(<HintText />);

    expect(container.querySelector('div')).toBeNull();
  });
});
