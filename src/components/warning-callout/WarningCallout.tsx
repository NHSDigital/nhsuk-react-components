import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const WarningCallout: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  label,
  children,
  ...rest
}) => (
  <div className={classNames('nhsuk-warning-callout')} {...rest}>
    {label ? <h3 className="nhsuk-warning-callout__label">{label}</h3> : null}
    {children}
  </div>
);

export default WarningCallout;
