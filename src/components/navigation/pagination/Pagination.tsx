import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from '@components/content-presentation/icons';

interface PaginationLinkProps extends ComponentPropsWithoutRef<'a'> {
  previous?: boolean;
  next?: boolean;
}

const PaginationLink: FC<PaginationLinkProps> = ({
  className,
  children,
  previous,
  next,
  ...rest
}) => (
  <li
    className={classNames(
      { 'nhsuk-pagination-item--previous': previous },
      { 'nhsuk-pagination-item--next': next },
    )}
  >
    <a
      className={classNames(
        'nhsuk-pagination__link',
        { 'nhsuk-pagination__link--prev': previous },
        { 'nhsuk-pagination__link--next': next },
        className,
      )}
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
    </a>
  </li>
);

type PaginationProps = ComponentPropsWithoutRef<'nav'>;

const PaginationComponent: FC<PaginationProps> = ({
  className,
  children,
  role = 'navigation',
  'aria-label': ariaLabel = 'Pagination',
  ...rest
}) => (
  <nav
    className={classNames('nhsuk-pagination', className)}
    role={role}
    aria-label={ariaLabel}
    {...rest}
  >
    <ul className="nhsuk-list nhsuk-pagination__list">{children}</ul>
  </nav>
);

PaginationComponent.displayName = 'Pagination';
PaginationLink.displayName = 'Pagination.Link';

export default Object.assign(PaginationComponent, {
  Link: PaginationLink,
});
