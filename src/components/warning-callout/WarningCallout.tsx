import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface WarningCalloutProps extends HTMLProps<HTMLDivElement> {
  labelProps?: HTMLProps<HTMLHeadingElement>;
}

const WarningCallout: React.FC<WarningCalloutProps> = ({
  className,
  label,
  children,
  labelProps,
  ...rest
}) => {
  const { labelClassName: className, ...restLabelProps } = labelProps || {};
  return (
    <div className={classNames('nhsuk-warning-callout', className)} {...rest}>
      {label ? (
        <h3
          className={classNames('nhsuk-warning-callout__label', labelClassName)}
          {...restLabelProps}
        >
          {label}
        </h3>
      ) : null}
      {children}
    </div>
  );
}

export default WarningCallout;
