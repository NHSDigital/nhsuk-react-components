import React, { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import SkipLink from '../';

function SkipLinkTestApp(): JSX.Element {
  const mainContentRef = createRef<HTMLElement>();

  return (
    <>
      <SkipLink focusTargetRef={mainContentRef} />
      <main className="nhsuk-main-wrapper" id="maincontent" role="main" ref={mainContentRef}>
        <div className="nhsuk-grid-row"></div>
      </main>
    </>
  );
}

describe('SkipLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<SkipLink />);

    expect(container).toMatchSnapshot('SkipLink');
  });

  it('sets the href to #maincontent by default and focuses the first heading', () => {
    const { container } = render(
      <>
        <SkipLink />
        <h1 id="heading">Heading</h1>
      </>,
    );

    const headingEl = container.querySelector('#heading') as HTMLElement;
    const focusSpy = jest.spyOn(headingEl, 'focus');

    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;

    expect(skipLinkEl.getAttribute('href')).toBe('#maincontent');

    fireEvent.click(skipLinkEl);

    expect(focusSpy).toHaveBeenCalled();
  });

  it('Does not focus the first heading if disableHeadingFocus is set', () => {
    const { container } = render(
      <>
        <SkipLink disableHeadingFocus />
        <h1 id="heading">Heading</h1>
      </>,
    );

    const headingEl = container.querySelector('#heading') as HTMLElement;
    const focusSpy = jest.spyOn(headingEl, 'focus');

    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;

    expect(skipLinkEl.getAttribute('href')).toBe('#maincontent');

    fireEvent.click(skipLinkEl);

    expect(focusSpy).not.toHaveBeenCalled();
  });

  it('calls onClick callback when clicked', () => {
    const onClick = jest.fn();
    const { container } = render(<SkipLink onClick={onClick} />);

    const skipLinkEl = container.querySelector('.nhsuk-skip-link')!;
    fireEvent.click(skipLinkEl);

    expect(onClick).toHaveBeenCalled();
  });

  it('Focuses the main content when clicked', () => {
    const { container } = render(<SkipLinkTestApp />);

    const mainContent = container.querySelector('main#maincontent') as HTMLElement;

    const focusSpy = jest.spyOn(mainContent, 'focus');

    expect(focusSpy).not.toHaveBeenCalled();

    const skipButton = container.querySelector('.nhsuk-skip-link')!;

    fireEvent.click(skipButton);

    expect(focusSpy).toHaveBeenCalled();
  });
});
