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
    render(<ErrorSummary ref={ref} />);

    expect(ref.current).not.toBeNull();
  });

  it('has default props', () => {
    const { container } = render(<ErrorSummary />);

    expect(container.querySelector('div')?.getAttribute('tabindex')).toBe('-1');
    expect(container.querySelector('div')?.getAttribute('role')).toBe('alert');
    expect(container.querySelector('div')?.getAttribute('aria-labelledby')).toBe('error-summary-title');
  })

  it('throws a dev warning if tabIndex is not -1', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<ErrorSummary tabIndex={0} />);
    expect(console.warn).toHaveBeenCalledWith('The ErrorSummary component should always have a tabIndex of -1');
  })

  it('throws a dev warning if role is not alert', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<ErrorSummary role="status" />);
    expect(console.warn).toHaveBeenCalledWith('The ErrorSummary component should always have a role of alert');
  })

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
