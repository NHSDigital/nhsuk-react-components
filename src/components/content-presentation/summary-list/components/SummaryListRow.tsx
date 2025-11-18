import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const SummaryListRow: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-summary-list__row', className)} {...rest} />
);

SummaryListRow.displayName = 'SummaryList.Row';
