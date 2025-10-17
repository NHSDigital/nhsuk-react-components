import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef, type FC, type PropsWithChildren } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '#components/content-presentation/index.js';
import { type AsElementLink } from '#util/types/LinkTypes.js';

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

export type PaginationLinkTextProps = PropsWithChildren &
  (
    | WithLabelText<{
        previous: true;
        next?: never;
      }>
    | WithLabelText<{
        previous?: never;
        next: true;
      }>
  );

type WithLabelText<T> = T & {
  labelText?: string;
};

export const PaginationLinkText: FC<PaginationLinkTextProps> = ({
  children,
  previous,
  next,
  labelText,
}) => {
  return (
    <>
      {children || previous || next ? (
        <span className="nhsuk-pagination__title">
          {children || (
            <>
              {previous ? 'Previous' : 'Next'}
              <span className="nhsuk-u-visually-hidden"> page</span>
            </>
          )}
        </span>
      ) : null}
      {labelText ? (
        <>
          <span className="nhsuk-u-visually-hidden">:</span>
          <span className="nhsuk-pagination__page">{labelText}</span>
        </>
      ) : null}
    </>
  );
};

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
PaginationItem.displayName = 'Pagination.Item';
PaginationLink.displayName = 'Pagination.Link';
PaginationLinkText.displayName = 'Pagination.LinkText';

export const Pagination = Object.assign(PaginationComponent, {
  Item: PaginationItem,
});
