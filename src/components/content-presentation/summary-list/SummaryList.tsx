import classNames from 'classnames';
import React, { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';

const SummaryListRow: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-summary-list__row', className)} {...rest} />
);

const SummaryListKey: FC<ComponentPropsWithoutRef<'dt'>> = ({ className, ...rest }) => (
  <dt className={classNames('nhsuk-summary-list__key', className)} {...rest} />
);

const SummaryListValue: FC<ComponentPropsWithoutRef<'dd'>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__value', className)} {...rest} />
);

const SummaryListActions: FC<ComponentPropsWithoutRef<'dd'>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__actions', className)} {...rest} />
);

export interface SummaryListProps extends ComponentPropsWithoutRef<'dl'> {
  noBorder?: boolean;
}

const SummaryListComponent = forwardRef<HTMLDListElement, SummaryListProps>(
  ({ className, noBorder, ...rest }, forwardedRef) => (
    <dl
      className={classNames(
        'nhsuk-summary-list',
        { 'nhsuk-summary-list--no-border': noBorder },
        className,
      )}
      ref={forwardedRef}
      {...rest}
    />
  ),
);

SummaryListComponent.displayName = 'SummaryList';
SummaryListRow.displayName = 'SummaryList.Row';
SummaryListKey.displayName = 'SummaryList.Key';
SummaryListValue.displayName = 'SummaryList.Value';
SummaryListActions.displayName = 'SummaryList.Actions';

export const SummaryList = Object.assign(SummaryListComponent, {
  Row: SummaryListRow,
  Key: SummaryListKey,
  Value: SummaryListValue,
  Actions: SummaryListActions,
});
