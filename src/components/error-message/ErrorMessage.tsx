import classNames from 'classnames';
import React, { HTMLProps, useContext, useEffect } from 'react';
import FormGroupContext from '../form-group/FormGroupContext';

interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  id,
  className,
  visuallyHiddenText,
  children,
  ...rest
}) => {
  const { setError, getErrorMessageID } = useContext(FormGroupContext);

  useEffect(() => {
    if (children) setError(true);
    return () => setError(false);
  }, [children]);

  return (
    <span
      className={classNames('nhsuk-error-message', className)}
      id={getErrorMessageID(id)}
      {...rest}
    >
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
