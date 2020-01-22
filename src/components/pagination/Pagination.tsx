import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from '../icons';

interface PaginationLinkProps extends HTMLProps<HTMLAnchorElement> {
  previous?: boolean;
  next?: boolean;
}

const PaginationLink: React.FC<PaginationLinkProps> = ({
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

interface Pagination extends React.FC<HTMLProps<HTMLDivElement>> {
  Link: React.FC<PaginationLinkProps>;
}

const Pagination: Pagination = ({ className, children, ...rest }) => (
  <nav className={classNames('nhsuk-pagination', className)} {...rest}>
    <ul className="nhsuk-list nhsuk-pagination__list">{children}</ul>
  </nav>
);

Pagination.defaultProps = {
  role: 'navigation',
  'aria-label': 'Pagination',
};

Pagination.Link = PaginationLink;

export default Pagination;
