import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SkipLink from '../';

function SkipLinkTestApp(): JSX.Element {
  return (
    <>
      <SkipLink />
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent"></main>
      </div>
    </>
  );
}

describe('SkipLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<SkipLinkTestApp />);

    expect(container).toMatchSnapshot('SkipLink');
  });

  it('sets the href to #maincontent by default', () => {
    const { container } = render(<SkipLinkTestApp />);

    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;

    expect(skipLinkEl.getAttribute('href')).toBe('#maincontent');
  });

  it('focuses the main content when clicked', async () => {
    const { container } = render(<SkipLinkTestApp />);

    const mainEl = container.querySelector('main');
    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;

    fireEvent.click(skipLinkEl);

    await waitFor(() => expect(document.activeElement).toBe(mainEl));
  });
});
