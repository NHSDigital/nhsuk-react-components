import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';

interface WarningCalloutLabelProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
  visuallyHiddenText?: string | false;
}

const WarningCalloutLabel: FC<WarningCalloutLabelProps> = ({
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
  Label: typeof WarningCalloutLabel;
}

const WarningCalloutComponent: IWarningCallout = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-warning-callout', className)} {...rest} />
);

WarningCalloutComponent.Label = WarningCalloutLabel;

export default WarningCalloutComponent;
