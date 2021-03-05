import React, { HTMLProps, useState } from 'react';
import { FormGroupContext } from './FormGroupContext';
// eslint-disable-next-line
import classNames from 'classnames';

interface FormGroupProps extends HTMLProps<HTMLDivElement> {
  error?: boolean;
  disableErrorLine?: boolean;
  disableErrorFromComponents?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = props => {
  const [inputID, setInputID] = useState<string>();
  const [error, setError] = useState<boolean>();
  const { children, className, disableErrorLine, disableErrorFromComponents, ...rest } = props;
  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorFromComponents && !disableErrorLine && error, // error,
        },
        className,
      )}
      {...rest}
    >
      <FormGroupContext.Provider
        value={{
          isInFormGroup: true,
          setInputID,
          inputID,
          error,
          setError,
          disableErrorFromComponents: Boolean(disableErrorFromComponents),
        }}
      >
        {children}
      </FormGroupContext.Provider>
    </div>
  );
};

export default FormGroup;
