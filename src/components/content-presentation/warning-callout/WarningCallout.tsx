import React, { ComponentPropsWithoutRef, FC, forwardRef } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelProps } from '@components/utils/HeadingLevel';

const WarningCalloutHeading: FC<HeadingLevelProps> = ({ children, className, ...rest }) => (
  <HeadingLevel className={classNames('nhsuk-warning-callout__label', className)} {...rest}>
    {children?.toString().toLowerCase().includes('important') ? (
      <>
        {children}
        <span className="nhsuk-u-visually-hidden">:</span>
      </>
    ) : (
      <>
        {/* eslint-disable-next-line jsx-a11y/aria-role */}
        <span role="text">
          <span className="nhsuk-u-visually-hidden">Important: </span>
          {children}
        </span>
      </>
    )}
  </HeadingLevel>
);

type WarningCalloutProps = ComponentPropsWithoutRef<'div'>;

const WarningCalloutComponent = forwardRef<HTMLDivElement, WarningCalloutProps>(
  ({ className, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-warning-callout', className)} ref={forwardedRef} {...rest} />
  ),
);

WarningCalloutComponent.displayName = 'WarningCallout';
WarningCalloutHeading.displayName = 'WarningCallout.Heading';

export default Object.assign(WarningCalloutComponent, {
  Heading: WarningCalloutHeading,
});
