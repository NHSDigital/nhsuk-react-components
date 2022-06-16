import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';
import VisuallyHidden from '../visually-hidden';

interface WarningCalloutLabelProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
  visuallyHiddenText?: string | false;
}

const WarningCalloutLabel: React.FC<WarningCalloutLabelProps> = ({
  className,
  visuallyHiddenText,
  children,
  ...rest
}) => (
  <HeadingLevel className={classNames('nhsuk-warning-callout__label', className)} {...rest}>
    {/* eslint-disable-next-line jsx-a11y/aria-role */}
    <span role="text">
      {visuallyHiddenText && <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>}
      {children}
    </span>
  </HeadingLevel>
);

WarningCalloutLabel.defaultProps = {
  visuallyHiddenText: 'Important: ',
};

interface IWarningCallout extends React.FC<HTMLProps<HTMLDivElement>> {
  Label: typeof WarningCalloutLabel;
}

const WarningCallout: IWarningCallout = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-warning-callout', className)} {...rest} />
);

WarningCallout.Label = WarningCalloutLabel;

export default WarningCallout;
