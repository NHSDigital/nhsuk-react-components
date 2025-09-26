import React, { createRef } from 'react';
import { Container } from '@components/layout';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SkipLink from '../';

describe('SkipLink', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
    );

    expect(container).toMatchSnapshot('SkipLink');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(
      <>
        <SkipLink ref={ref} />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
    );

    const skipLinkEl = container.querySelector('.nhsuk-skip-link');

    expect(ref.current).toBe(skipLinkEl);
    expect(ref.current).toHaveClass('nhsuk-skip-link');
  });

  it('sets the href to #maincontent by default', () => {
    const { container } = render(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
    );

    const skipLinkEl = container.querySelector('.nhsuk-skip-link');

    expect(skipLinkEl).toHaveAttribute('href', '#maincontent');
    expect(skipLinkEl).toHaveClass('nhsuk-skip-link');
  });

  it('focuses the main content when clicked', async () => {
    const { container } = render(
      <>
        <SkipLink />
        <Container>
          <main className="nhsuk-main-wrapper" id="maincontent" />
        </Container>
      </>,
    );

    const mainEl = container.querySelector('main');
    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;

    fireEvent.click(skipLinkEl);

    await waitFor(() => expect(document.activeElement).toBe(mainEl));
  });
});
