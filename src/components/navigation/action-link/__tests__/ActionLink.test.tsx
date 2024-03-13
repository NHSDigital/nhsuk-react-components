import React from 'react';
import { render } from '@testing-library/react';
import ActionLink from '../ActionLink';

describe('ActionLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<ActionLink href="/test">Test</ActionLink>);

    expect(container).toMatchSnapshot('ActionLink');
  });
});
