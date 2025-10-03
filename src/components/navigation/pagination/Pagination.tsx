import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '#components/content-presentation';
import { type AsElementLink } from '#util/types';

export interface PaginationLinkProps extends AsElementLink<HTMLAnchorElement> {
  previous?: boolean;
  next?: boolean;
}

const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, children, asElement: Element = 'a', previous, next, ...rest }, forwardedRef) => (
    <li
      className={classNames(
        { 'nhsuk-pagination-item--previous': previous },
        { 'nhsuk-pagination-item--next': next },
      )}
    >
      <Element
        className={classNames(
          'nhsuk-pagination__link',
          { 'nhsuk-pagination__link--prev': previous },
          { 'nhsuk-pagination__link--next': next },
          className,
        )}
        ref={forwardedRef}
        {...rest}
      >
        <span className="nhsuk-pagination__title">
          {previous ? 'Previous' : null}
          {next ? 'Next' : null}
        </span>
        <span className="nhsuk-u-visually-hidden">:</span>
        <span className="nhsuk-pagination__page">{children}</span>
        {previous ? <ArrowLeftIcon /> : null}
        {next ? <ArrowRightIcon /> : null}
      </Element>
    </li>
  ),
);

type PaginationProps = ComponentPropsWithoutRef<'nav'>;

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
PaginationLink.displayName = 'Pagination.Link';

export const Pagination = Object.assign(PaginationComponent, {
  Link: PaginationLink,
});
