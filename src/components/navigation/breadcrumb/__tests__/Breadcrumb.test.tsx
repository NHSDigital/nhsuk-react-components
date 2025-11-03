import { render } from '@testing-library/react';
import { createRef, type ComponentProps } from 'react';

import { Breadcrumb } from '..';

describe('Breadcrumb', () => {
  it('base element matches snapshot', () => {
    const { container } = render(<Breadcrumb />);

    expect(container).toMatchSnapshot('BaseBreadcrumbs');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<Breadcrumb ref={ref} />);

    const breadcrumbEl = container.querySelector('nav');

    expect(ref.current).toBe(breadcrumbEl);
    expect(ref.current).toHaveClass('nhsuk-breadcrumb');
  });

  it('renders with children', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(container).toMatchSnapshot('BreadcrumbWithChildren');
  });

  it('places children in correct places', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
        <Breadcrumb.Back href="/back">Breadcrumb 2</Breadcrumb.Back>
        <p id="otherElement">Test Element</p>
      </Breadcrumb>,
    );

    const breadcrumbListItems = container.querySelectorAll('.nhsuk-breadcrumb__list > li');

    expect(breadcrumbListItems.length).toBe(2);

    breadcrumbListItems.forEach((child) => {
      expect(child.classList).toContain('nhsuk-breadcrumb__list-item');
    });

    expect(container.querySelector('#otherElement')?.textContent).toEqual('Test Element');
    expect(container.querySelector('.nhsuk-back-link')?.textContent).toBe('Back to Breadcrumb 2');
  });

  it('passes through other children fine', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/bc-1">Breadcrumb 1</Breadcrumb.Item>
        <Breadcrumb.Item href="/bc-2">Breadcrumb 2</Breadcrumb.Item>
        <p id="otherElement">Test Element</p>
      </Breadcrumb>,
    );

    expect(container.querySelector('#otherElement')?.textContent).toEqual('Test Element');
  });

  it.each<string | undefined>([undefined, 'Test label'])(
    'Renders as expected when aria label is specified as %s',
    (ariaLabel) => {
      const { container } = render(<Breadcrumb aria-label={ariaLabel}></Breadcrumb>);

      const breadcrumbElement = container.querySelector('.nhsuk-breadcrumb');

      expect(breadcrumbElement?.getAttribute('aria-label')).toBe(ariaLabel ?? 'Breadcrumb');
    },
  );

  describe('Breadcrumb back link', () => {
    it('renders as expected with visually hidden text', () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Back href="/back">Breadcrumb 2</Breadcrumb.Back>
        </Breadcrumb>,
      );

      const hiddenSpan = container.querySelector('.nhsuk-back-link > .nhsuk-u-visually-hidden');

      expect(hiddenSpan?.textContent).toBe('Back to ');
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
        <Breadcrumb>
          <Breadcrumb.Back href="/back" asElement={CustomLink}>
            Breadcrumb 2
          </Breadcrumb.Back>
        </Breadcrumb>,
      );

      const backLinkEl = container.querySelector('a');

      expect(backLinkEl?.dataset).toHaveProperty('customLink', 'true');
    });

    it('forwards refs', () => {
      const ref = createRef<HTMLAnchorElement>();

      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Back href="/back" ref={ref}>
            Breadcrumb 2
          </Breadcrumb.Back>
        </Breadcrumb>,
      );

      const backLinkEl = container.querySelector('a');

      expect(ref.current).toBe(backLinkEl);
      expect(ref.current).toHaveClass('nhsuk-back-link');
    });
  });
});
