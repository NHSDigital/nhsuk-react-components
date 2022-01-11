import classNames from 'classnames';
import React, { HTMLProps } from 'react';

const ErrorSummaryTitle: React.FC<HTMLProps<HTMLHeadingElement>> = ({ className, ...rest }) => (
  <h2 className={classNames('nhsuk-error-summary__title', className)} {...rest} />
);
ErrorSummaryTitle.displayName = 'ErrorSummary.Title';

const ErrorSummaryBody: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-error-summary__body', className)} {...rest} />
);
ErrorSummaryBody.displayName = 'ErrorSummary.Body';

const ErrorSummaryList: React.FC<HTMLProps<HTMLUListElement>> = ({ className, ...rest }) => (
  <ul className={classNames('nhsuk-list', 'nhsuk-error-summary__list', className)} {...rest} />
);
ErrorSummaryList.displayName = 'ErrorSummary.List';

const ErrorSummaryListItem: React.FC<HTMLProps<HTMLAnchorElement>> = (props) => (
  <li>
    <a {...props} />
  </li>
);
ErrorSummaryListItem.displayName = 'ErrorSummary.Item';

interface ErrorSummary extends React.FC<HTMLProps<HTMLDivElement>> {
  Title: React.FC<HTMLProps<HTMLHeadingElement>>;
  Body: React.FC<HTMLProps<HTMLDivElement>>;
  List: React.FC<HTMLProps<HTMLUListElement>>;
  Item: React.FC<HTMLProps<HTMLAnchorElement>>;
}

const ErrorSummary: ErrorSummary = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-error-summary', className)} {...rest} />
);

ErrorSummary.Title = ErrorSummaryTitle;
ErrorSummary.Body = ErrorSummaryBody;
ErrorSummary.List = ErrorSummaryList;
ErrorSummary.Item = ErrorSummaryListItem;

export default ErrorSummary;
