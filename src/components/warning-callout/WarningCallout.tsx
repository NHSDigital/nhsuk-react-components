import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';

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
  <HeadingLevel className={classNames('nhsuk-warning-callout__label')} {...rest}>
    <span role="text">
      {visuallyHiddenText && <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>}
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
