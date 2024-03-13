import React from 'react';
import { render } from '@testing-library/react';
import ErrorSummary from '../';

describe('ErrorSummary', () => {
  it('matches snapshot', () => {
    const { container } = render(<ErrorSummary />);

    expect(container).toMatchSnapshot('ErrorSummary');
  });

  it('forwards refs', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ErrorSummary ref={ref} />);

    expect(ref.current).not.toBeNull();
  });

  describe('ErrorSummary.Title', () => {
    it('matches snapshot', () => {
      const { container } = render(<ErrorSummary.Title>Title</ErrorSummary.Title>);

      expect(container).toMatchSnapshot('ErrorSummary.Title');
    });

    it('renders a title', () => {
      const { container } = render(<ErrorSummary.Title>Title</ErrorSummary.Title>);

      expect(container.textContent).toBe('Title');
    });
  });

  describe('ErrorSummary.Body', () => {
    it('matches snapshot', () => {
      const { container } = render(<ErrorSummary.Body>Body</ErrorSummary.Body>);

      expect(container.textContent).toBe('Body');
      expect(container).toMatchSnapshot('ErrorSummary.Body');
    });
  });

  describe('ErrorSummary.List', () => {
    it('matches snapshot', () => {
      const { container } = render(<ErrorSummary.List>List</ErrorSummary.List>);

      expect(container).toMatchSnapshot('ErrorSummary.List');
    });

    it('renders children', () => {
      const { container } = render(<ErrorSummary.List>List</ErrorSummary.List>);

      expect(container.textContent).toBe('List');
    });
  });

  describe('ErrorSummary.ListItem', () => {
    it('matches snapshot', () => {
      const { container } = render(<ErrorSummary.Item>ListItem</ErrorSummary.Item>);

      expect(container).toMatchSnapshot('ErrorSummary.ListItem');
    });

    it('renders children', () => {
      const { container } = render(<ErrorSummary.Item>ListItem</ErrorSummary.Item>);

      expect(container.querySelector('a')?.textContent).toBe('ListItem');
    });
  });
});
