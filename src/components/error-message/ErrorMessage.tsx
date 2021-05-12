import React, { HTMLProps, useContext, useEffect } from 'react';

// eslint-disable-next-line import/no-named-as-default
import FormGroupContext from '../formgroup/FormGroupContext';
// eslint-disable-next-line
import classNames from 'classnames';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: false | string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { id, className, visuallyHiddenText, children, ...rest } = props;
  const { isInFormGroup, inputID, setError } = useContext(FormGroupContext);
  useEffect(() => {
    if (isInFormGroup || inputID) {
      setError(Boolean(children));
      return () => setError(undefined);
    }
  }, [isInFormGroup, inputID]);

  const errorMessageId = id || inputID ? `${inputID}--error-message` : undefined;
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
