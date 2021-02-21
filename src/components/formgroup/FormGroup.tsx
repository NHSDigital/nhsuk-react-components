// import React, { ReactNode, useState, HTMLProps, useContext } from 'react';
import React, { HTMLProps, useState } from 'react';

import { FormGroupContext } from './FormGroupContext';
// eslint-disable-next-line
import classNames from 'classnames';

// import { useFormContext } from '../form';

interface FormGroupProps extends HTMLProps<HTMLDivElement> {
  error?: boolean;
  disableErrorLine?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = props => {
  const [inputID, setInputID] = useState<string>();
  const [error, setError] = useState<boolean>();

  // const { error, children, className, disableErrorLine, ...rest } = props;
  const { children, className, disableErrorLine, ...rest } = props;
  // const { disableErrorFromComponents } = useFormContext();
  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': error, // !disableErrorFromComponents && !disableErrorLine && error
        },
        className,
      )}
      {...rest}
    >

      <FormGroupContext.Provider value={{ isInFormGroup: true, setInputID, inputID, error, setError }}>
        {children}
      </FormGroupContext.Provider>
    </div>
  );
};

export default FormGroup;
