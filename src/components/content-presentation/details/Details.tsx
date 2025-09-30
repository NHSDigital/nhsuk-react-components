import React, { ComponentPropsWithoutRef, FC, forwardRef } from 'react';
import classNames from 'classnames';

export interface DetailsProps extends ComponentPropsWithoutRef<'details'> {
  expander?: boolean;
}

const DetailsComponent = forwardRef<HTMLDetailsElement, DetailsProps>(
  ({ className, expander, ...rest }, forwardedRef) => (
    <details
      className={classNames('nhsuk-details', { 'nhsuk-expander': expander }, className)}
      ref={forwardedRef}
      {...rest}
    />
  ),
);

const DetailsSummary = forwardRef<HTMLElement, ComponentPropsWithoutRef<'div'>>(
  ({ children, className, ...rest }, forwardedRef) => (
    <summary
      className={classNames('nhsuk-details__summary', className)}
      ref={forwardedRef}
      {...rest}
    >
      <span className="nhsuk-details__summary-text">{children}</span>
    </summary>
  ),
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
  ExpanderGroup,
});
