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

PaginationLinkText.displayName = 'Pagination.LinkText';
