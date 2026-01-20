import { render } from '@testing-library/react';
import { createRef, type ComponentProps } from 'react';

import { ContentsList } from '..';

describe('ContentsList', () => {
  it('matches snapshot', () => {
    const { container } = render(<ContentsList />);

    expect(container).toMatchSnapshot('ContentsList');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(<ContentsList ref={ref} />);

    const contentsListRef = container.querySelector('nav');

    expect(ref.current).toBe(contentsListRef);
    expect(ref.current).toHaveClass('nhsuk-contents-list');
  });

  it('renders default visually hidden text', () => {
    const { container } = render(<ContentsList />);

    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(visuallyHiddenEl).toHaveTextContent('Contents');
  });

  it('renders custom visually hidden text', () => {
    const { container } = render(<ContentsList visuallyHiddenText="Custom" />);

    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(visuallyHiddenEl).toHaveTextContent('Custom');
  });

  it('renders custom visually hidden HTML', () => {
    const { container } = render(
      <ContentsList
        visuallyHiddenText={
          <>
            Custom <em>with HTML</em>
          </>
        }
      />,
    );

    const visuallyHiddenEl = container.querySelector('.nhsuk-u-visually-hidden');

    expect(visuallyHiddenEl).toHaveTextContent('Custom with HTML');
    expect(visuallyHiddenEl).toContainHTML('Custom <em>with HTML</em>');
  });

  describe('ContentsList.Item', () => {
    it('matches snapshot', () => {
      const { container } = render(<ContentsList.Item>Content</ContentsList.Item>);

      expect(container).toMatchSnapshot('ContentsList.Item');
    });

    it('forwards refs', () => {
      const ref = createRef<HTMLAnchorElement>();

      const { container } = render(<ContentsList.Item ref={ref}>Content</ContentsList.Item>);

      const contentsListItemRef = container.querySelector('a');

      expect(ref.current).toBe(contentsListItemRef);
      expect(ref.current).toHaveClass('nhsuk-contents-list__link');
    });

    it('renders as span when current', () => {
      const { container } = render(<ContentsList.Item current>Content</ContentsList.Item>);

      expect(container.querySelector('span.nhsuk-contents-list__current')?.textContent).toBe(
        'Content',
      );
    });

    it('renders as link by default', () => {
      const { container } = render(<ContentsList.Item>Content</ContentsList.Item>);

      expect(container.querySelector('a.nhsuk-contents-list__link')?.textContent).toBe('Content');
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
        <ContentsList.Item asElement={CustomLink}>Content</ContentsList.Item>,
      );

      const contentsListItemEl = container.querySelector('a');

      expect(contentsListItemEl?.dataset).toHaveProperty('customLink', 'true');
    });
  });
});
