import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef } from 'react';

import { PaginationItem, PaginationLink } from './components/index.js';

import { childIsOfComponentType } from '#util/types/TypeGuards.js';

export type PaginationProps = ComponentPropsWithoutRef<'nav'>;

const PaginationComponent = forwardRef<HTMLElement, PaginationProps>(
  ({ className, children, 'aria-label': ariaLabel = 'Pagination', ...rest }, forwardedRef) => {
    const items = Children.toArray(children);

    // Filter previous and next links
    const links = items.filter((child) => childIsOfComponentType(child, PaginationLink));
    const linkPrevious = links.find(({ props }) => props.previous);
    const linkNext = links.find(({ props }) => props.next);

    // Filter numbered list items
    const listItems = items.filter((child) => childIsOfComponentType(child, PaginationItem));
    const listItemsNumbered = listItems.filter(({ props }) => props.number || props.ellipsis);

    return (
      <nav
        className={classNames(
          'nhsuk-pagination',
          { 'nhsuk-pagination--numbered': listItemsNumbered.length },
          className,
        )}
        role="navigation"
        aria-label={ariaLabel}
        ref={forwardedRef}
        {...rest}
      >
        {linkPrevious}
        <ul
          className={
            listItemsNumbered.length
              ? 'nhsuk-pagination__list' // Standard pagination list class
              : 'nhsuk-list nhsuk-pagination__list' // Legacy pagination list class
          }
        >
          {listItems}
        </ul>
        {linkNext}
      </nav>
    );
  },
);

PaginationComponent.displayName = 'Pagination';

export const Pagination = Object.assign(PaginationComponent, {
  Item: PaginationItem,
  Link: PaginationLink,
});
