import React, { HTMLProps, useState } from 'react';
import classNames from 'classnames';
import FormContext from './FormContext';

interface FormProps extends HTMLProps<HTMLFormElement> {
  disableErrorFromComponents?: boolean;
  error?: boolean;
}

const Form: React.FC<FormProps> = ({ className, error, disableErrorFromComponents, ...rest }) => {
  const [errors, setErrors] = useState<Array<string>>([]);

  const setError = (name: string, hasError: boolean): void => {
    if (disableErrorFromComponents) {
      return;
    }
    const hasExistingError = errors.includes(name);
    if (hasExistingError && !hasError) {
      const newErrors = errors.filter(x => x !== name);
      setErrors(newErrors);
    } else if (!hasExistingError && hasError) {
      setErrors([...errors, name]);
    }
  };

  const hasErrors = error === undefined ? errors.length > 0 : error;

  return (
    <FormContext.Provider value={{ setError, isForm: true }}>
      <div
        className={classNames(
          'nhsuk-form-group',
          { 'nhsuk-form-group--error': hasErrors },
          className,
        )}
      >
        <form {...rest} />
      </div>
    </FormContext.Provider>
  );
};

export default Form;
