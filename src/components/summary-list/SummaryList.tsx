import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const SummaryListRow: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-summary-list__row', className)} {...rest}></div>
);

const SummaryListKey: React.FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dt className={classNames('nhsuk-summary-list__key', className)} {...rest}></dt>
);

const SummaryListValue: React.FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__value', className)} {...rest}></dd>
);

const SummaryListActions: React.FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('nhsuk-summary-list__actions')} {...rest}></dd>
);

interface SummaryListProps extends HTMLProps<HTMLDListElement> {
  noBorder?: boolean;
}

interface SummaryList extends React.FC<SummaryListProps> {
  Row: React.FC<HTMLProps<HTMLDivElement>>;
  Key: React.FC<HTMLProps<HTMLDListElement>>;
  Value: React.FC<HTMLProps<HTMLDListElement>>;
  Actions: React.FC<HTMLProps<HTMLDListElement>>;
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
