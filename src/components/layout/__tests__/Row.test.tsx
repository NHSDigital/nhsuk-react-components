import { render } from '@testing-library/react';
import React from 'react';
import { Row } from '..';

describe('Row', () => {
  it('matches snapshot', () => {
    const { container } = render(<Row />);

    expect(container).toMatchSnapshot('Row');
  });
});
