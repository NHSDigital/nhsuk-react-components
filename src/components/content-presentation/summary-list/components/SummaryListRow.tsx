import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface SummaryListRowProps extends ComponentPropsWithoutRef<'div'> {
  noBorder?: boolean;
}

export const SummaryListRow: FC<SummaryListRowProps> = ({ className, noBorder, ...rest }) => (
  <div
    className={classNames(
      'nhsuk-summary-list__row',
      { 'nhsuk-summary-list__row--no-border': noBorder },
      className,
    )}
    {...rest}
  />
);

SummaryListRow.displayName = 'SummaryList.Row';
