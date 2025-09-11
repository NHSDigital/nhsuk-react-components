import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import ErrorSummary from '../';

describe('ErrorSummary', () => {
  it('matches snapshot', () => {
    const { container } = render(<ErrorSummary />);

    expect(container).toMatchSnapshot('ErrorSummary');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<ErrorSummary ref={ref} />);

    const errorSummaryEl = container.querySelector('div');

    expect(ref.current).toBe(errorSummaryEl);
    expect(ref.current).toHaveClass('nhsuk-error-summary');
  });

  it('is focused automatically', () => {
    const { container } = render(<ErrorSummary />);

    const errorSummaryEl = container.querySelector('div');

    expect(document.activeElement).toBe(errorSummaryEl);
  });

  it('is focused automatically with forwarded ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<ErrorSummary ref={ref} />);

    const errorSummaryEl = container.querySelector('div');

    expect(document.activeElement).toBe(errorSummaryEl);
  });

  it('has default props', () => {
    const { container } = render(<ErrorSummary />);

    const errorSummaryEl = container.querySelector('div');

    expect(errorSummaryEl?.getAttribute('tabindex')).toBe('-1');
    expect(errorSummaryEl?.firstElementChild?.getAttribute('role')).toBe('alert');
  });

  it('has default props with forwarded ref', () => {
    const { container } = render(<ErrorSummary />);

    const errorSummaryEl = container.querySelector('div');

    expect(errorSummaryEl?.getAttribute('tabindex')).toBe('-1');
    expect(errorSummaryEl?.firstElementChild?.getAttribute('role')).toBe('alert');
  });

  describe('ErrorSummary.Title', () => {
    it('matches snapshot', () => {
      const { container } = render(<ErrorSummary.Title>Title</ErrorSummary.Title>);

      expect(container).toMatchSnapshot('ErrorSummary.Title');
    });

    it('renders a title', () => {
      const { container } = render(<ErrorSummary.Title>Title</ErrorSummary.Title>);

      expect(container).toHaveTextContent('Title');
    });
  });

  describe('ErrorSummary.List', () => {
    it('matches snapshot', () => {
      const { container } = render(<ErrorSummary.List>List</ErrorSummary.List>);

      expect(container).toMatchSnapshot('ErrorSummary.List');
    });

    it('renders children', () => {
      const { container } = render(<ErrorSummary.List>List</ErrorSummary.List>);

      expect(container).toHaveTextContent('List');
    });

    it('renders null with no children', () => {
      const { container } = render(<ErrorSummary.List />);

      expect(container.querySelector('ul')).toBeNull();
    });
  });

  describe('ErrorSummary.ListItem', () => {
    it('matches snapshot for items without links', () => {
      const { container } = render(
        <ErrorSummary.ListItem>List item without link</ErrorSummary.ListItem>,
      );

      expect(container).toMatchSnapshot();
    });

    it('matches snapshot for items with links', () => {
      const { container } = render(
        <ErrorSummary.ListItem href="#example-error-1">List item with link</ErrorSummary.ListItem>,
      );

      expect(container).toMatchSnapshot();
    });

    it('renders children', () => {
      const { container } = render(
        <ErrorSummary.ListItem href="#example-error-1">List item with link</ErrorSummary.ListItem>,
      );

      const errorLinkEls = container.querySelectorAll('a');

      expect(errorLinkEls?.[0]).toHaveTextContent('List item with link');
      expect(errorLinkEls?.[0]).toHaveAttribute('href', '#example-error-1');
    });

    it('renders null with no children', () => {
      const { container } = render(<ErrorSummary.ListItem />);

      expect(container.querySelector('li')).toBeNull();
    });
  });
});
