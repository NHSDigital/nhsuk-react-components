import React from 'react';
import classNames from 'classnames';

interface DetailsProps extends React.HTMLProps<HTMLDetailsElement> {
  expander?: boolean;
}

interface Details extends React.FC<DetailsProps> {
  Summary: React.FC<React.HTMLProps<HTMLDivElement>>;
  Text: React.FC<React.HTMLProps<HTMLDivElement>>;
  ExpanderGroup: React.FC<React.HTMLProps<HTMLDivElement>>;
}

// TODO: Check if standard NHS.UK polyfill "details.polyfill.js" is required
const Details: Details = ({ className, expander, ...rest }: any) => (
  <details
    className={classNames('nhsuk-details', { 'nhsuk-expander': expander }, className)}
    {...rest}
  />
);

const DetailsSummary: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => (
  <summary className={classNames('nhsuk-details__summary', className)} {...rest}>
    <span className="nhsuk-details__summary-text">{children}</span>
  </summary>
);

const DetailsText: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-details__text', className)} {...rest} />
);

const ExpanderGroup: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-expander-group', className)} {...rest} />
);

Details.Summary = DetailsSummary;
Details.Text = DetailsText;
Details.ExpanderGroup = ExpanderGroup;

export default Details;
