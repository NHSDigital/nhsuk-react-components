import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

interface DetailsProps extends ComponentPropsWithoutRef<'details'> {
  expander?: boolean;
}

const DetailsComponent: FC<DetailsProps> = ({ className, expander, ...rest }) => (
  <details
    className={classNames('nhsuk-details', { 'nhsuk-expander': expander }, className)}
    {...rest}
  />
);

const DetailsSummary: FC<ComponentPropsWithoutRef<'div'>> = ({ className, children, ...rest }) => (
  <summary className={classNames('nhsuk-details__summary', className)} {...rest}>
    <span className="nhsuk-details__summary-text">{children}</span>
  </summary>
);

const DetailsText: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-details__text', className)} {...rest} />
);

const ExpanderGroup: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-expander-group', className)} {...rest} />
);

DetailsComponent.displayName = 'Details';
DetailsSummary.displayName = 'Details.Summary';
DetailsText.displayName = 'Details.Text';
ExpanderGroup.displayName = 'Details.ExpanderGroup';

export default Object.assign(DetailsComponent, {
  Summary: DetailsSummary,
  Text: DetailsText,
  ExpanderGroup: ExpanderGroup,
});
