import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { PaginationItem } from './components/index.js';

export type PaginationProps = ComponentPropsWithoutRef<'nav'>;

const PaginationComponent = forwardRef<HTMLElement, PaginationProps>(
  ({ className, children, 'aria-label': ariaLabel = 'Pagination', ...rest }, forwardedRef) => (
    <nav
      className={classNames('nhsuk-pagination', className)}
      role="navigation"
      aria-label={ariaLabel}
      ref={forwardedRef}
      {...rest}
    >
      <ul className="nhsuk-list nhsuk-pagination__list">{children}</ul>
    </nav>
  ),
);

PaginationComponent.displayName = 'Pagination';

export const Pagination = Object.assign(PaginationComponent, {
  Item: PaginationItem,
});
