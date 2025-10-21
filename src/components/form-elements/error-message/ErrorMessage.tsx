import React from 'react';
import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface ErrorMessageProps extends ComponentPropsWithoutRef<'span'> {
  visuallyHiddenText?: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  className,
  visuallyHiddenText = 'Error',
  children,
  ...rest
}) => {
  if (!children) {
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

ErrorMessage.displayName = 'ErrorMessage';
