import { render } from '@testing-library/react';
import { Col } from '..';

describe('Col', () => {
  it('matches snapshot', () => {
    const { container } = render(<Col width="full" />);

    expect(container).toMatchSnapshot('Col');
  });

  it('renders a grid column', () => {
    const { container } = render(<Col width="full" />);

    expect(container.querySelector('.nhsuk-grid-column-full')).toBeTruthy();
  });
});
