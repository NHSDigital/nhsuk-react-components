import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

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

interface SummaryListProps extends ComponentPropsWithoutRef<'dl'> {
  noBorder?: boolean;
}

const SummaryListComponent: FC<SummaryListProps> = ({ className, noBorder, ...rest }) => (
  <dl
    className={classNames(
      'nhsuk-summary-list',
      { 'nhsuk-summary-list--no-border': noBorder },
      className,
    )}
    {...rest}
  />
);

SummaryListComponent.displayName = 'SummaryList';
SummaryListRow.displayName = 'SummaryList.Row';
SummaryListKey.displayName = 'SummaryList.Key';
SummaryListValue.displayName = 'SummaryList.Value';
SummaryListActions.displayName = 'SummaryList.Actions';

export default Object.assign(SummaryListComponent, {
  Row: SummaryListRow,
  Key: SummaryListKey,
  Value: SummaryListValue,
  Actions: SummaryListActions,
});
