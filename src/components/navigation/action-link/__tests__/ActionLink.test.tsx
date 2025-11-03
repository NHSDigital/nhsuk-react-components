import { render } from '@testing-library/react';
import { createRef, type ComponentProps } from 'react';

import { ActionLink } from '..';

describe('ActionLink', () => {
  it('matches snapshot', () => {
    const { container } = render(<ActionLink href="/test">Test</ActionLink>);

    expect(container).toMatchSnapshot('ActionLink');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(
      <ActionLink href="/test" ref={ref}>
        Test
      </ActionLink>,
    );

    const actionLinkEl = container.querySelector('a');

    expect(ref.current).toBe(actionLinkEl);
    expect(ref.current).toHaveClass('nhsuk-action-link');
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
      <ActionLink href="/test" asElement={CustomLink}>
        Test
      </ActionLink>,
    );

    const actionLinkEl = container.querySelector('a');

    expect(actionLinkEl?.dataset).toHaveProperty('customLink', 'true');
  });
});
