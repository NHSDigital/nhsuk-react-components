import classNames from 'classnames';
import { forwardRef } from 'react';
import { PaginationLink, type PaginationLinkProps } from './PaginationLink.js';

export type PaginationItemProps = PaginationLinkProps;

export const PaginationItem = forwardRef<HTMLAnchorElement, PaginationItemProps>(
  (props, forwardedRef) => {
    return (
      <li
        className={classNames(
          { 'nhsuk-pagination-item--previous': props.previous },
          { 'nhsuk-pagination-item--next': props.next },
        )}
      >
        <PaginationLink ref={forwardedRef} {...props} />
      </li>
    );
  },
);

PaginationItem.displayName = 'Pagination.Item';
