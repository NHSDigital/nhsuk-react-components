import { render } from '@testing-library/react';
import { createRef } from 'react';
import { InsetText } from '..';

describe('InsetText', () => {
  it('matches snapshot', () => {
    const { container } = render(<InsetText />);

    expect(container).toMatchSnapshot('InsetText');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<InsetText ref={ref} />);

    const insetTextEl = container.querySelector('div');

    expect(ref.current).toBe(insetTextEl);
    expect(ref.current).toHaveClass('nhsuk-inset-text');
  });

  it('has default visually hidden text', () => {
    const { container } = render(<InsetText />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toBe('Information: ');
  });

  it('renders children', () => {
    const { container } = render(<InsetText>Child</InsetText>);

    expect(container.textContent).toBe('Information: Child');
  });
});
