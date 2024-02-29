import React from 'react';
import { render } from '@testing-library/react';
import ContentsList from '../';

describe('ContentsList', () => {
  it('matches snapshot', () => {
    const { container } = render(<ContentsList />);

    expect(container).toMatchSnapshot('ContentsList');
  });

  it('renders default hidden text', () => {
    const { container } = render(<ContentsList />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toEqual('Contents');
  });

  it('renders custom hidden text', () => {
    const { container } = render(<ContentsList visuallyHiddenText="Custom" />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toEqual('Custom');
  });

  it('disables hidden text', () => {
    const { container } = render(<ContentsList visuallyHiddenText={false} />);

    expect(container.querySelector('.nhsuk-u-visually-hidden')).toBeFalsy();
  });

  describe('ContentsList.Item', () => {
    it('matches snapshot', () => {
      const { container } = render(<ContentsList.Item>Content</ContentsList.Item>);

      expect(container).toMatchSnapshot('ContentsList.Item');
    });

    it('renders as span when current', () => {
      const { container } = render(<ContentsList.Item current>Content</ContentsList.Item>);

      expect(container.querySelector('span.nhsuk-contents-list__current')?.textContent).toBe(
        'Content',
      );
    });

    it('normally renders as anchor', () => {
      const { container } = render(<ContentsList.Item>Content</ContentsList.Item>);

      expect(container.querySelector('a.nhsuk-contents-list__link')?.textContent).toBe('Content');
    });
  });
});
