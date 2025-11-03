import { render } from '@testing-library/react';
import { createRef } from 'react';

import { Pagination } from '..';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const { container } = render(<Pagination />);

    expect(container).toMatchSnapshot('Pagination');
  });

  it('matches snapshot with next item', () => {
    const { container } = render(
      <Pagination>
        <Pagination.Item href="#" labelText="Page name" next />
      </Pagination>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with previous item', () => {
    const { container } = render(
      <Pagination>
        <Pagination.Item href="#" labelText="Page name" previous />
      </Pagination>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with previous and next items', () => {
    const { container } = render(
      <Pagination>
        <Pagination.Item href="#" labelText="Treatments" previous />
        <Pagination.Item href="#" labelText="Symptoms" next />
      </Pagination>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with previous and next items (translated)', () => {
    const { container } = render(
      <Pagination>
        <Pagination.Item href="#" labelText="Driniaethau" previous>
          Blaenorol
        </Pagination.Item>
        <Pagination.Item href="#" labelText="Symptomau" next>
          Nesaf
        </Pagination.Item>
      </Pagination>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with numbered items', () => {
    const { container } = render(
      <Pagination>
        <Pagination.Link href="/results?page=1" previous />
        <Pagination.Item href="/results?page=1" number={1} />
        <Pagination.Item href="/results?page=2" number={2} current />
        <Pagination.Item href="/results?page=3" number={3} />
        <Pagination.Link href="/results?page=3" next />
      </Pagination>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with numbered items (translated)', () => {
    const { container } = render(
      <Pagination>
        <Pagination.Link href="/results?page=1" previous>
          Blaenorol
        </Pagination.Link>
        <Pagination.Item href="/results?page=1" number={1} />
        <Pagination.Item href="/results?page=2" number={2} current />
        <Pagination.Item href="/results?page=3" number={3} />
        <Pagination.Link href="/results?page=3" next>
          Nesaf
        </Pagination.Link>
      </Pagination>,
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(
      <Pagination ref={ref}>
        <Pagination.Item href="#" labelText="Treatments" previous />
        <Pagination.Item href="#" labelText="Symptoms" next />
      </Pagination>,
    );

    const paginationEl = container.querySelector('nav');

    expect(ref.current).toBe(paginationEl);
    expect(ref.current).toHaveClass('nhsuk-pagination');
  });

  it('forwards refs with numbered items', () => {
    const ref = createRef<HTMLElement>();

    const { container } = render(
      <Pagination ref={ref}>
        <Pagination.Link href="/results?page=1" previous />
        <Pagination.Item href="/results?page=1" number={1} />
        <Pagination.Item href="/results?page=2" number={2} current />
        <Pagination.Item href="/results?page=3" number={3} />
        <Pagination.Link href="/results?page=3" next />
      </Pagination>,
    );

    const paginationEl = container.querySelector('nav');

    expect(ref.current).toBe(paginationEl);
    expect(ref.current).toHaveClass('nhsuk-pagination', 'nhsuk-pagination--numbered');
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

    it('matches snapshot with number', () => {
      const { container } = render(<Pagination.Item href="#" number={10} />);

      expect(container).toMatchSnapshot();
    });

    it('matches snapshot with ellipsis', () => {
      const { container } = render(<Pagination.Item ellipsis />);

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

    it('renders number elements', () => {
      const { container } = render(<Pagination.Item href="#" number={10} />);

      const itemEl = container.querySelector('li');
      const linkEl = container.querySelector('a');

      expect(itemEl).toHaveClass('nhsuk-pagination__item');
      expect(linkEl).toHaveClass('nhsuk-pagination__link');
      expect(linkEl).toHaveTextContent('10');
      expect(linkEl).toHaveAccessibleName('Page 10');
    });

    it('renders ellipsis elements', () => {
      const { container } = render(<Pagination.Item ellipsis />);

      const itemEl = container.querySelector('li');
      const linkEl = container.querySelector('a');

      expect(itemEl).toHaveClass('nhsuk-pagination__item', 'nhsuk-pagination__item--ellipsis');
      expect(itemEl).toHaveTextContent('⋯');
      expect(linkEl).toBeNull();
    });
  });

  describe('Pagination.Link', () => {
    it('matches snapshot with previous link', () => {
      const { container } = render(<Pagination.Link href="#" previous />);

      expect(container).toMatchSnapshot();
    });

    it('matches snapshot with next link', () => {
      const { container } = render(<Pagination.Link href="#" next />);

      expect(container).toMatchSnapshot();
    });

    it('renders previous elements', () => {
      const { container } = render(<Pagination.Link href="#" previous />);

      const linkEl = container.querySelector('a');
      const titleEl = container.querySelector('.nhsuk-pagination__title');
      const iconEl = container.querySelector('.nhsuk-icon');

      expect(linkEl).toHaveClass('nhsuk-pagination__previous');
      expect(linkEl).not.toHaveClass('nhsuk-pagination__next');

      expect(titleEl).toHaveTextContent('Previous');

      expect(iconEl).toHaveClass('nhsuk-icon--arrow-left');
      expect(iconEl).not.toHaveClass('nhsuk-icon--arrow-right');
    });

    it('renders next elements', () => {
      const { container } = render(<Pagination.Link href="#" next />);

      const linkEl = container.querySelector('a');
      const titleEl = container.querySelector('.nhsuk-pagination__title');
      const iconEl = container.querySelector('.nhsuk-icon');

      expect(linkEl).not.toHaveClass('nhsuk-pagination__previous');
      expect(linkEl).toHaveClass('nhsuk-pagination__next');

      expect(titleEl).toHaveTextContent('Next');

      expect(iconEl).not.toHaveClass('nhsuk-icon--arrow-left');
      expect(iconEl).toHaveClass('nhsuk-icon--arrow-right');
    });
  });
});
