import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export type ErrorSummaryTitleProps = ComponentPropsWithoutRef<'h2'>;

export const ErrorSummaryTitle: FC<ErrorSummaryTitleProps> = ({ children, className, ...rest }) => (
  <h2 className={classNames('nhsuk-error-summary__title', className)} {...rest}>
    {children}
  </h2>
);

ErrorSummaryTitle.displayName = 'ErrorSummary.Title';
