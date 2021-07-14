import React, { HTMLProps, useEffect, useState } from 'react';
import FormGroupContext from './FormGroupContext';
import classNames from 'classnames';

export interface FormGroupProps extends HTMLProps<HTMLDivElement> {
  error?: boolean;
  disableErrorLine?: boolean;
  disableErrorFromComponents?: boolean;
  _exposeContext?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({
  error: errorProp,
  children,
  className,
  disableErrorLine,
  disableErrorFromComponents,
  _exposeContext,
  ...rest
}) => {
  const [error, setError] = useState<boolean>(errorProp);
  const [inputID, setInputID] = useState<string>();

  useEffect(() => {
    if (typeof errorProp === 'boolean' && error !== errorProp) setError(errorProp);
  }, [errorProp, error]);

  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorFromComponents && !disableErrorLine && error,
        },
        className,
      )}
      {...rest}
    >
      {_exposeContext ? (
        <FormGroupContext.Provider
          value={{
            isInFormGroup: true,
            inputID,
            error,
            setError,
            setInputID,
          }}
        >
          {children}
        </FormGroupContext.Provider>
      ) : (
        children
      )}
    </div>
  );
};
FormGroup.defaultProps = {
  _exposeContext: true,
};

export default FormGroup;
