import React, { HTMLProps, useContext } from 'react';

import classNames from 'classnames';
import FormGroupContext from '../formgroup/FormGroupContext';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => <BaseErrorMessage {...props} />;

const BaseErrorMessage: React.FC<ErrorMessageProps> = props => {
  const { id, className, visuallyHiddenText, children, ...rest } = props;
  const { inputID } = useContext(FormGroupContext);
  const errorMessageId = props.id || inputID || undefined;
  return (
    <span id={errorMessageId} className={classNames('nhsuk-error-message', className)} {...rest}>
      {visuallyHiddenText !== false ? (
        <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
      ) : null}
      {children}
    </span>
  );
};

ErrorMessage.defaultProps = {
  visuallyHiddenText: 'Error: ',
  role: 'alert',
};

export default ErrorMessage;
