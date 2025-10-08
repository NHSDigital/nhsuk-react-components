import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Images } from '..';

describe('Images', () => {
  it('matches snapshot', () => {
    const { container } = render(<Images />);

    expect(container.querySelector('.nhsuk-image')).toBeTruthy();
    expect(container).toMatchSnapshot('Images');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<Images ref={ref} />);

    const figureEl = container.querySelector('figure');

    expect(ref.current).toBe(figureEl);
    expect(ref.current).toHaveClass('nhsuk-image');
  });

  it('renders caption', () => {
    const { container } = render(<Images caption="Caption" />);

    expect(container.querySelector('figcaption')).toBeTruthy();
    expect(container.querySelector('figcaption.nhsuk-image__caption')).toBeTruthy();
    expect(container.querySelector('figcaption')?.textContent).toBe('Caption');
  });
});
