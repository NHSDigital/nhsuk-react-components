import React from 'react';
import { render } from '@testing-library/react';
import BodyText from '../BodyText';

describe('BodyText', () => {
  it('matches snapshot', () => {
    const { container } = render(<BodyText>Text</BodyText>);

    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<BodyText>Text</BodyText>);

    expect(container.textContent).toBe('Text');
    expect(container.querySelector('.nhsuk-body')).toBeTruthy();
  });
});
