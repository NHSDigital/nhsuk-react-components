import React from 'react';
import { render } from '@testing-library/react';
import InsetText from '../';

describe('InsetText', () => {
  it('matches snapshot', () => {
    const { container } = render(<InsetText />);

    expect(container).toMatchSnapshot('InsetText');
  });

  it('has default visually hidden text', () => {
    const { container } = render(<InsetText />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Information: ');
  });

  it('has disabled visually hidden text', () => {
    const { container } = render(<InsetText visuallyHiddenText={false} />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')).toBeFalsy();
  });

  it('has custom visually hidden text', () => {
    const { container } = render(<InsetText visuallyHiddenText="Custom" />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Custom');
  });

  it('renders children', () => {
    const { container } = render(<InsetText>Child</InsetText>);

    expect(container.textContent).toBe('Information: Child');
  });
});
