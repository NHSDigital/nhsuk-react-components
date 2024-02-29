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

interface SummaryList extends FC<SummaryListProps> {
  Row: FC<HTMLProps<HTMLDivElement>>;
  Key: FC<HTMLProps<HTMLDListElement>>;
  Value: FC<HTMLProps<HTMLDListElement>>;
  Actions: FC<HTMLProps<HTMLDListElement>>;
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
