import React from 'react';
import { render } from '@testing-library/react';
import TableCaption from '../TableCaption';

describe('TableCaption', () => {
  it('matches snapshot', () => {
    const { container } = render(<TableCaption />);

    expect(container).toMatchSnapshot();
  });
});
