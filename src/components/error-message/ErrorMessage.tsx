import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText = 'Error: ',
  role = 'alert',
  children,
  ...rest
}) => (
  <span className={classNames('nhsuk-error-message', className)} role={role} {...rest}>
    {visuallyHiddenText !== false ? (
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </span>
);

export default ErrorMessage;
