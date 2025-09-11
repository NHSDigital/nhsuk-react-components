import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
  visuallyHiddenText?: string;
}

const ErrorMessageComponent: FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText = 'Error',
  children,
  ...rest
}) => {
  if (!children || typeof children !== 'string') {
    return null;
  }

  return (
    <span className={classNames('nhsuk-error-message', className)} {...rest}>
      {visuallyHiddenText ? (
        <>
          <span className="nhsuk-u-visually-hidden">{`${visuallyHiddenText}:`}</span> {children}
        </>
      ) : (
        <>{children}</>
      )}
    </span>
  );
};

ErrorMessageComponent.displayName = 'ErrorMessage';

export default ErrorMessageComponent;
