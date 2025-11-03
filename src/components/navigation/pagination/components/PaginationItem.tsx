import classNames from 'classnames';
import { forwardRef } from 'react';

import { PaginationLink, type PaginationLinkProps } from './PaginationLink.js';
import { PaginationLinkText } from './PaginationLinkText.js';

import { ArrowLeftIcon, ArrowRightIcon } from '#components/content-presentation/index.js';

export type PaginationItemProps = PaginationLinkProps & {
  ellipsis?: boolean;
};

export const PaginationItem = forwardRef<HTMLAnchorElement, PaginationItemProps>(
  ({ children, ...rest }, forwardedRef) => {
    const isPrevious = !!rest.previous && !rest.next;
    const isNext = !!rest.next && !rest.previous;

    const className =
      isPrevious || isNext
        ? 'nhsuk-pagination-item' // Legacy pagination class
        : 'nhsuk-pagination__item'; // Numbered pagination class

    return (
      <li
        className={classNames(
          // Legacy pagination item previous/next uses modifier only
          isPrevious || isNext ? undefined : className,
          { [`${className}--current`]: rest.current },
          { [`${className}--ellipsis`]: rest.ellipsis },
          { [`${className}--previous`]: !!rest.previous && !rest.next },
          { [`${className}--next`]: !!rest.next && !rest.previous },
        )}
      >
        {rest.ellipsis ? (
          '⋯'
        ) : (
          <PaginationLink
            className={classNames(
              'nhsuk-pagination__link',
              { 'nhsuk-pagination__link--prev': isPrevious },
              { 'nhsuk-pagination__link--next': isNext },
            )}
            ref={forwardedRef}
            {...rest}
          >
            <PaginationLinkText {...rest}>{children}</PaginationLinkText>
            {rest.previous ? <ArrowLeftIcon /> : null}
            {rest.next ? <ArrowRightIcon /> : null}
          </PaginationLink>
        )}
      </li>
    );
  },
);

PaginationItem.displayName = 'Pagination.Item';
