import React, { ComponentProps, createRef } from 'react';
import { render } from '@testing-library/react';
import BackLink from '../';

describe('BackLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<BackLink href="/back">Back</BackLink>);

    expect(container).toMatchSnapshot('BackLink');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(
      <BackLink href="/back" ref={ref}>
        Back
      </BackLink>,
    );

    const backLinkEl = container.querySelector('a');

    expect(ref.current).toBe(backLinkEl);
    expect(ref.current).toHaveClass('nhsuk-back-link');
  });

  it('renders as custom element', () => {
    function CustomLink({ children, href, ...rest }: ComponentProps<'a'>) {
      return (
        <a href={href} {...rest} data-custom-link="true">
          {children}
        </a>
      );
    }

    const { container } = render(
      <BackLink href="/back" asElement={CustomLink}>
        Back
      </BackLink>,
    );

    const backLinkEl = container.querySelector('a');

    expect(backLinkEl?.dataset).toHaveProperty('customLink', 'true');
  });
});
