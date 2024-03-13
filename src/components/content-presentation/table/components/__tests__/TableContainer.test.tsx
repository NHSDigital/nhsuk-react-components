import React from 'react';
import { render } from '@testing-library/react';
import TableContainer from '../TableContainer';

describe('TableContainer', () => {
  it('matches snapshot', () => {
    const { container } = render(<TableContainer />);

    expect(container).toMatchSnapshot();
  });
});
