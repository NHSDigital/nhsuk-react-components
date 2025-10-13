import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export type ErrorSummaryListProps = ComponentPropsWithoutRef<'ul'>;

export const ErrorSummaryList: FC<ErrorSummaryListProps> = ({ children, className, ...rest }) => {
  if (!children) {
    return null;
  }

  return (
    <ul className={classNames('nhsuk-list', 'nhsuk-error-summary__list', className)} {...rest}>
      {children}
    </ul>
  );
};

ErrorSummaryList.displayName = 'ErrorSummary.List';
