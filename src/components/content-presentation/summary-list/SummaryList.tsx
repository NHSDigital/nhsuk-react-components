import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const SummaryListRow: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-summary-list__row', className)} {...rest} />
);

const SummaryListKey: FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dt className={classNames('nhsuk-summary-list__key', className)} {...rest} />
);

const SummaryListValue: FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__value', className)} {...rest} />
);

const SummaryListActions: FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__actions', className)} {...rest} />
);

interface SummaryListProps extends HTMLProps<HTMLDListElement> {
  noBorder?: boolean;
}

interface SummaryListComponent extends FC<SummaryListProps> {
  Row: FC<HTMLProps<HTMLDivElement>>;
  Key: FC<HTMLProps<HTMLDListElement>>;
  Value: FC<HTMLProps<HTMLDListElement>>;
  Actions: FC<HTMLProps<HTMLDListElement>>;
}

const SummaryListComponent: SummaryListComponent = ({ className, noBorder, ...rest }) => (
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

SummaryListComponent.Row = SummaryListRow;
SummaryListComponent.Key = SummaryListKey;
SummaryListComponent.Value = SummaryListValue;
SummaryListComponent.Actions = SummaryListActions;

export default SummaryListComponent;
