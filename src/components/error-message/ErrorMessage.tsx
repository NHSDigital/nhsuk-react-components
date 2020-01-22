import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText,
  children,
  ...rest
}) => (
  <span className={classNames('nhsuk-error-message', className)} {...rest}>
    {visuallyHiddenText !== false ? (
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </span>
);

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: ',
};

export default ErrorMessage;
