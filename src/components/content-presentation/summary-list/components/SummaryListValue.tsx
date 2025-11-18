import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const SummaryListValue: FC<ComponentPropsWithoutRef<'dd'>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__value', className)} {...rest} />
);

SummaryListValue.displayName = 'SummaryList.Value';
