import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
  it('matches snapshot', () => {
    const { container } = render(<Container />);

    expect(container).toMatchSnapshot();
  });

  it('adds fluid classes', () => {
    const { container } = render(<Container fluid />);

    expect(container.querySelector('.nhsuk-width-container-fluid')).toBeTruthy();
  });
});
