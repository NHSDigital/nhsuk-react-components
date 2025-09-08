import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';

interface WarningCalloutHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
  visuallyHiddenText?: string | false;
}

const WarningCalloutHeading: FC<WarningCalloutHeadingProps> = ({
  className,
  visuallyHiddenText = 'Important: ',
  children,
  ...rest
}) => (
  <HeadingLevel className={classNames('nhsuk-warning-callout__label', className)} {...rest}>
    {/* eslint-disable-next-line jsx-a11y/aria-role */}
    <span role="text">
      {visuallyHiddenText && <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>}
      {children}
    </span>
  </HeadingLevel>
);

interface IWarningCallout extends FC<HTMLProps<HTMLDivElement>> {
  Heading: typeof WarningCalloutHeading;
}

const WarningCalloutComponent: IWarningCallout = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-warning-callout', className)} {...rest} />
);

WarningCalloutComponent.Heading = WarningCalloutHeading;

export default WarningCalloutComponent;
