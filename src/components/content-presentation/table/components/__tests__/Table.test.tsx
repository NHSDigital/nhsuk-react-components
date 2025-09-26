import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import Table from '../..';

describe('Table', () => {
  it('matches snapshot', () => {
    const { container } = render(<Table />);

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLTableElement>();

    const { container } = render(<Table ref={ref} />);

    const tableEl = container.querySelector('table');

    expect(ref.current).toBe(tableEl);
    expect(ref.current).toHaveClass('nhsuk-table');
  });
});
