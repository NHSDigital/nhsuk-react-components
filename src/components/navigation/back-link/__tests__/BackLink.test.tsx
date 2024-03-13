import React from 'react';
import { render } from '@testing-library/react';
import BackLink from '../';

describe('BackLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<BackLink href="/back">Back</BackLink>);

    expect(container).toMatchSnapshot('BackLink');
  });
});
