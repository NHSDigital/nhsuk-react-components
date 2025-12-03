import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface SummaryListRowProps extends ComponentPropsWithoutRef<'div'> {
  noActions?: boolean;
  noBorder?: boolean;
}

export const SummaryListRow: FC<SummaryListRowProps> = ({
  className,
  noActions,
  noBorder,
  ...rest
}) => (
  <div
    className={classNames(
      'nhsuk-summary-list__row',
      { 'nhsuk-summary-list__row--no-actions': noActions },
      { 'nhsuk-summary-list__row--no-border': noBorder },
      className,
    )}
    {...rest}
  />
);

SummaryListRow.displayName = 'SummaryList.Row';
