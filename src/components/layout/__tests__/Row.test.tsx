import React from 'react';
import { render } from '@testing-library/react';
import Row from '../Row';

describe('Row', () => {
  it('matches snapshot', () => {
    const { container } = render(<Row />);

    expect(container).toMatchSnapshot('Row');
  });
});
