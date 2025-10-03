import { render } from '@testing-library/react';
import { Pagination } from '..';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const { container } = render(<Pagination />);

    expect(container).toMatchSnapshot('Pagination');
  });

  describe('Pagination.Link', () => {
    it('matches snapshot', () => {
      const { container } = render(<Pagination.Link />);

      expect(container).toMatchSnapshot('Pagination.Link');
    });

    it('renders previous elements', () => {
      const { container } = render(<Pagination.Link previous>PreviousText</Pagination.Link>);

      expect(container.querySelector('.nhsuk-pagination-item--previous')).toBeTruthy();
      expect(container.querySelector('.nhsuk-pagination-item--next')).toBeFalsy();
      expect(container.querySelector('.nhsuk-pagination__title')?.textContent).toBe('Previous');
      expect(container.querySelector('.nhsuk-icon--arrow-left')).toBeTruthy();
      expect(container.querySelector('.nhsuk-icon--arrow-right')).toBeFalsy();
      expect(container.querySelector('.nhsuk-pagination__page')?.textContent).toBe('PreviousText');
      expect(
        container.querySelector('.nhsuk-pagination__link.nhsuk-pagination__link--prev'),
      ).toBeTruthy();
      expect(
        container.querySelector('.nhsuk-pagination__link.nhsuk-pagination__link--next'),
      ).toBeFalsy();
    });

    it('renders next elements', () => {
      const { container } = render(<Pagination.Link next>NextText</Pagination.Link>);

      expect(container.querySelector('.nhsuk-pagination-item--previous')).toBeFalsy();
      expect(container.querySelector('.nhsuk-pagination-item--next')).toBeTruthy();
      expect(container.querySelector('.nhsuk-pagination__title')?.textContent).toBe('Next');
      expect(container.querySelector('.nhsuk-icon--arrow-left')).toBeFalsy();
      expect(container.querySelector('.nhsuk-icon--arrow-right')).toBeTruthy();
      expect(container.querySelector('.nhsuk-pagination__page')?.textContent).toBe('NextText');
      expect(
        container.querySelector('.nhsuk-pagination__link.nhsuk-pagination__link--prev'),
      ).toBeFalsy();
      expect(
        container.querySelector('.nhsuk-pagination__link.nhsuk-pagination__link--next'),
      ).toBeTruthy();
    });
  });
});
