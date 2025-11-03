import { render } from '@testing-library/react';

import { ReviewDate } from '..';

describe('ReviewDate', () => {
  it('matches snapshot', () => {
    const { container } = render(<ReviewDate />);

    expect(container).toMatchSnapshot('ReviewDate');
  });

  it('works with lastReview and nextReview', () => {
    const { container } = render(
      <ReviewDate lastReviewed="19 November 2019" nextReview="19 November 2020" />,
    );

    expect(container.querySelector('br')).toBeTruthy();
    expect(container.textContent).toBe(
      'Page last reviewed: 19 November 2019Next review due: 19 November 2020',
    );
  });
});
