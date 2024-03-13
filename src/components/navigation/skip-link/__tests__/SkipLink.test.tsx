import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SkipLink from '../';

describe('SkipLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<SkipLink />);

    expect(container).toMatchSnapshot('SkipLink');
  });

  it('sets the href to #maincontent by default', () => {
    const { container } = render(<SkipLink />);

    expect(container.querySelector('.nhsuk-skip-link')?.getAttribute('href')).toBe('#maincontent');
  });

  it('calls onClick callback when clicked', () => {
    const onClick = jest.fn();
    const { container } = render(<SkipLink onClick={onClick} />);

    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;
    fireEvent.click(skipLinkEl);

    expect(onClick).toHaveBeenCalled();
  });

  it('does not set the href when disableDefaultBehaviour is set', () => {
    const { container } = render(<SkipLink disableDefaultBehaviour />);

    expect(container.querySelector('.nhsuk-skip-link')?.getAttribute('href')).toBeFalsy();
  });
});
