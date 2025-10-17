import { render } from '@testing-library/react';
import { Pagination } from '..';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const { container } = render(<Pagination />);

    expect(container).toMatchSnapshot('Pagination');
  });

  describe('Pagination.Item', () => {
    it('matches snapshot with previous item', () => {
      const { container } = render(<Pagination.Item href="#" labelText="Page name" previous />);

      expect(container).toMatchSnapshot();
    });

    it('matches snapshot with previous item (no label text)', () => {
      const { container } = render(<Pagination.Item href="#" previous />);

      expect(container).toMatchSnapshot();
    });

    it('matches snapshot with next item', () => {
      const { container } = render(<Pagination.Item href="#" labelText="Page name" next />);

      expect(container).toMatchSnapshot();
    });

    it('matches snapshot with next item (no label text)', () => {
      const { container } = render(<Pagination.Item href="#" next />);

      expect(container).toMatchSnapshot();
    });

    it('renders previous elements', () => {
      const { container } = render(<Pagination.Item href="#" labelText="Page name" previous />);

      const itemEl = container.querySelector('li');
      const linkEl = container.querySelector('a');
      const titleEl = container.querySelector('.nhsuk-pagination__title');
      const pageEl = container.querySelector('.nhsuk-pagination__page');
      const iconEl = container.querySelector('.nhsuk-icon');

      expect(itemEl).toHaveClass('nhsuk-pagination-item--previous');
      expect(itemEl).not.toHaveClass('nhsuk-pagination-item--next');

      expect(linkEl).toHaveClass('nhsuk-pagination__link', 'nhsuk-pagination__link--prev');
      expect(linkEl).not.toHaveClass('nhsuk-pagination__link--next');

      expect(titleEl).toHaveTextContent('Previous');
      expect(pageEl).toHaveTextContent('Page name');

      expect(iconEl).toHaveClass('nhsuk-icon--arrow-left');
      expect(iconEl).not.toHaveClass('nhsuk-icon--arrow-right');
    });

    it('renders next elements', () => {
      const { container } = render(<Pagination.Item href="#" labelText="Page name" next />);

      const itemEl = container.querySelector('li');
      const linkEl = container.querySelector('a');
      const titleEl = container.querySelector('.nhsuk-pagination__title');
      const pageEl = container.querySelector('.nhsuk-pagination__page');
      const iconEl = container.querySelector('.nhsuk-icon');

      expect(itemEl).not.toHaveClass('nhsuk-pagination-item--previous');
      expect(itemEl).toHaveClass('nhsuk-pagination-item--next');

      expect(linkEl).not.toHaveClass('nhsuk-pagination__link--prev');
      expect(linkEl).toHaveClass('nhsuk-pagination__link', 'nhsuk-pagination__link--next');

      expect(titleEl).toHaveTextContent('Next');
      expect(pageEl).toHaveTextContent('Page name');

      expect(iconEl).not.toHaveClass('nhsuk-icon--arrow-left');
      expect(iconEl).toHaveClass('nhsuk-icon--arrow-right');
    });
  });
});
