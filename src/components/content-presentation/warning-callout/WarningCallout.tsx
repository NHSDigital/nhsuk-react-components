import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';

interface WarningCalloutHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
}

const WarningCalloutHeading: FC<WarningCalloutHeadingProps> = ({
  className,
  children,
  ...rest
}) => (
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

interface IWarningCallout extends FC<HTMLProps<HTMLDivElement>> {
  Heading: typeof WarningCalloutHeading;
}

const WarningCalloutComponent: IWarningCallout = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-warning-callout', className)} {...rest} />
);

WarningCalloutComponent.displayName = 'WarningCallout';
WarningCalloutHeading.displayName = 'WarningCallout.Heading';

WarningCalloutComponent.Heading = WarningCalloutHeading;

export default WarningCalloutComponent;
