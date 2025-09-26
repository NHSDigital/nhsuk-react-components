import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import TableContainer from '../TableContainer';

describe('TableContainer', () => {
  it('matches snapshot', () => {
    const { container } = render(<TableContainer />);

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<TableContainer ref={ref} />);

    const containerEl = container.querySelector('div');

    expect(ref.current).toBe(containerEl);
    expect(ref.current).toHaveClass('nhsuk-table-container');
  });
});
