import classNames from 'classnames';
import { forwardRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '#components/content-presentation/index.js';
import { type AsElementLink } from '#util/types/LinkTypes.js';
import { PaginationLinkText, type PaginationLinkTextProps } from './PaginationLinkText.js';

export type PaginationLinkProps = PaginationLinkTextProps & AsElementLink<HTMLAnchorElement>;

export const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, asElement: Element = 'a', ...rest }, forwardedRef) => {
    const { children, labelText, previous, next, ...elementRest } = rest;

    const isPrevious = !!previous && !next;
    const isNext = !!next && !previous;

    return (
      <Element
        className={classNames(
          'nhsuk-pagination__link',
          { 'nhsuk-pagination__link--prev': isPrevious },
          { 'nhsuk-pagination__link--next': isNext },
          className,
        )}
        rel={isPrevious || isNext ? (isPrevious ? 'prev' : 'next') : undefined}
        ref={forwardedRef}
        {...elementRest}
      >
        <PaginationLinkText {...rest} />
        {isPrevious ? <ArrowLeftIcon /> : null}
        {isNext ? <ArrowRightIcon /> : null}
      </Element>
    );
  },
);

PaginationLink.displayName = 'Pagination.Link';
