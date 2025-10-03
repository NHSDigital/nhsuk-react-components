import classNames from 'classnames';
import React, { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils';

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

export type WarningCalloutProps = ComponentPropsWithoutRef<'div'>;

const WarningCalloutComponent = forwardRef<HTMLDivElement, WarningCalloutProps>(
  ({ className, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-warning-callout', className)} ref={forwardedRef} {...rest} />
  ),
);

WarningCalloutComponent.displayName = 'WarningCallout';
WarningCalloutHeading.displayName = 'WarningCallout.Heading';

export const WarningCallout = Object.assign(WarningCalloutComponent, {
  Heading: WarningCalloutHeading,
});
