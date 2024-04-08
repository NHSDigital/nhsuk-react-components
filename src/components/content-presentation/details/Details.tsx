import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface DetailsProps extends HTMLProps<HTMLDetailsElement> {
  expander?: boolean;
}

interface Details extends FC<DetailsProps> {
  Summary: FC<HTMLProps<HTMLDivElement>>;
  Text: FC<HTMLProps<HTMLDivElement>>;
  ExpanderGroup: FC<HTMLProps<HTMLDivElement>>;
}

// TODO: Check if standard NHS.UK polyfill "details.polyfill.js" is required
const Details: Details = ({ className, expander, ...rest }) => (
  <details
    className={classNames('nhsuk-details', { 'nhsuk-expander': expander }, className)}
    {...rest}
  />
);

const DetailsSummary: FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => (
  <summary className={classNames('nhsuk-details__summary', className)} {...rest}>
    <span className="nhsuk-details__summary-text">{children}</span>
  </summary>
);

const DetailsText: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-details__text', className)} {...rest} />
);

const ExpanderGroup: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-expander-group', className)} {...rest} />
);

Details.Summary = DetailsSummary;
Details.Text = DetailsText;
Details.ExpanderGroup = ExpanderGroup;

export default Details;
