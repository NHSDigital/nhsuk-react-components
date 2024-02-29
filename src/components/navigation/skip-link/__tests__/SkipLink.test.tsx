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
