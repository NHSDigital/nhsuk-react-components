import classNames from 'classnames';
import React, { HTMLProps } from 'react';

interface DetailsProps extends HTMLProps<HTMLDetailsElement> {
  expander?: boolean;
}

type DetailsChildComponents = {
  Summary: typeof DetailsSummary;
  Text: typeof DetailsText;
  ExpanderGroup: typeof ExpanderGroup;
};

// TODO: Check if standard NHS.UK polyfill "details.polyfill.js" is required
const Details: React.FC<DetailsProps> & DetailsChildComponents = ({
  className,
  expander,
  ...rest
}) => (
  <details
    className={classNames('nhsuk-details', { 'nhsuk-expander': expander }, className)}
    {...rest}
  />
);

const DetailsSummary: React.FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => (
  <summary className={classNames('nhsuk-details__summary', className)} {...rest}>
    <span className="nhsuk-details__summary-text">{children}</span>
  </summary>
);
DetailsSummary.displayName = 'Details.Summary';

const DetailsText: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-details__text', className)} {...rest} />
);
DetailsText.displayName = 'Details.Text';

const ExpanderGroup: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-expander-group', className)} {...rest} />
);
ExpanderGroup.displayName = 'Details.ExpanderGroup';

Details.Summary = DetailsSummary;
Details.Text = DetailsText;
Details.ExpanderGroup = ExpanderGroup;

export default Details;
