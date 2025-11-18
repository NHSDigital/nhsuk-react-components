import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const SummaryListActions: FC<ComponentPropsWithoutRef<'dd'>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__actions', className)} {...rest} />
);

SummaryListActions.displayName = 'SummaryList.Actions';
