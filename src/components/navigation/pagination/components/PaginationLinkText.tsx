import { type FC, type PropsWithChildren } from 'react';

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
    | WithoutLabelText<{
        current?: never;
        number?: never;
        visuallyHiddenText?: never;
      }>
    | WithoutLabelText<{
        current?: boolean;
        number: number;
        visuallyHiddenText?: string;
      }>
  );

type WithLabelText<T> = T & {
  labelText?: string;
  current?: never;
  number?: never;
  visuallyHiddenText?: never;
};

type WithoutLabelText<T> = T & {
  labelText?: never;
  previous?: never;
  next?: never;
};

export const PaginationLinkText: FC<PaginationLinkTextProps> = ({
  children,
  previous,
  next,
  labelText,
  number,
}) => {
  if (typeof number === 'number') {
    return Number.isFinite(number) ? number : null;
  }

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

PaginationLinkText.displayName = 'Pagination.LinkText';
