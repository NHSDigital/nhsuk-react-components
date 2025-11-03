import { forwardRef } from 'react';

import { PaginationLinkText, type PaginationLinkTextProps } from './PaginationLinkText.js';

import { ArrowLeftIcon, ArrowRightIcon } from '#components/content-presentation/index.js';
import { type AsElementLink } from '#util/types/LinkTypes.js';

export type PaginationLinkProps = PaginationLinkTextProps & AsElementLink<HTMLAnchorElement>;

export const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => {
    const {
      children,
      labelText,
      previous,
      next,
      current,
      number,
      visuallyHiddenText = `Page ${number}`,
      ...elementRest
    } = rest;

    const isPrevious = !!previous && !next;
    const isNext = !!next && !previous;

    const classNameLink =
      isPrevious || isNext
        ? isPrevious
          ? 'nhsuk-pagination__previous'
          : 'nhsuk-pagination__next'
        : undefined;

    return (
      <Element
        className={className || classNameLink}
        aria-label={typeof number === 'number' ? visuallyHiddenText : undefined}
        rel={isPrevious || isNext ? (isPrevious ? 'prev' : 'next') : undefined}
        ref={forwardedRef}
        {...elementRest}
      >
        {children && typeof children !== 'string' ? (
          // Legacy pagination previous/next passes icons directly
          <>{children}</>
        ) : (
          // Numbered pagination links determine their own content
          <>
            {isPrevious ? <ArrowLeftIcon /> : null}
            <PaginationLinkText {...rest} labelText={undefined}>
              {children}
            </PaginationLinkText>
            {isNext ? <ArrowRightIcon /> : null}
          </>
        )}
      </Element>
    );
  },
);

PaginationLink.displayName = 'Pagination.Link';
