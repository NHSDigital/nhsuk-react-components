import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from '@components/content-presentation/icons';
import { AsElementLink } from '@util/types/LinkTypes';

interface PaginationLinkProps extends AsElementLink<HTMLAnchorElement> {
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
        {previous ? <ArrowLeft /> : null}
        {next ? <ArrowRight /> : null}
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

export default Object.assign(PaginationComponent, {
  Link: PaginationLink,
});
