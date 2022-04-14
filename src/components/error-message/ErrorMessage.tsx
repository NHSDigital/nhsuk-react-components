import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import VisuallyHidden from '../visually-hidden';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText,
  children,
  ...rest
}) => (
  <span className={classNames('nhsuk-error-message', className)} {...rest}>
    {visuallyHiddenText !== false ? <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> : null}
    {children}
  </span>
);

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: ',
  role: 'alert',
};

export default ErrorMessage;
