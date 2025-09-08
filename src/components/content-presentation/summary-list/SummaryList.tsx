import React from 'react';
import classNames from 'classnames';

const SummaryListRow: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-summary-list__row', className)} {...rest} />
);

const SummaryListKey: React.FC<React.HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dt className={classNames('nhsuk-summary-list__key', className)} {...rest} />
);

const SummaryListValue: React.FC<React.HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__value', className)} {...rest} />
);

const SummaryListActions: React.FC<React.HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__actions', className)} {...rest} />
);

interface SummaryListProps extends React.HTMLProps<HTMLDListElement> {
  noBorder?: boolean;
}

interface SummaryList extends React.FC<SummaryListProps> {
  Row: React.FC<React.HTMLProps<HTMLDivElement>>;
  Key: React.FC<React.HTMLProps<HTMLDListElement>>;
  Value: React.FC<React.HTMLProps<HTMLDListElement>>;
  Actions: React.FC<React.HTMLProps<HTMLDListElement>>;
}

const SummaryList: SummaryList = ({ className, noBorder, ...rest }) => (
  <dl
    className={classNames(
      'nhsuk-summary-list',
      { 'nhsuk-summary-list--no-border': noBorder },
      className,
    )}
    {...rest}
  />
);

SummaryList.Row = SummaryListRow;
SummaryList.Key = SummaryListKey;
SummaryList.Value = SummaryListValue;
SummaryList.Actions = SummaryListActions;

export default SummaryList;
