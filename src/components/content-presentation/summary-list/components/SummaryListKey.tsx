import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const SummaryListKey: FC<ComponentPropsWithoutRef<'dt'>> = ({ className, ...rest }) => (
  <dt className={classNames('nhsuk-summary-list__key', className)} {...rest} />
);

SummaryListKey.displayName = 'SummaryList.Key';
