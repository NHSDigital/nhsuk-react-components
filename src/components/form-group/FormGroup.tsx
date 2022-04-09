import classNames from 'classnames';
import React, { ContextType, HTMLProps, useContext, useState } from 'react';
import FormGroupContext from './FormGroupContext';

export interface FormGroupProps extends HTMLProps<HTMLDivElement> {
  error?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({ error, children, className, ...rest }) => {
  const { isInFormGroup } = useContext(FormGroupContext);
  if (isInFormGroup) {
    throw new Error('A FormGroup component cannot be contained inside an existing FormGroup');
  }
  const [inputID, setInputID] = useState<string>();
  const [inputError, setInputError] = useState<boolean>(Boolean(error));

  const hasError = error === undefined ? inputError : error;

  const contextValue: ContextType<typeof FormGroupContext> = {
    isInFormGroup: true,
    inputID: inputID,
    error: error,
    setError: setInputError,
    setInputID,
    getLabelID: (labelID?: string) => labelID || (inputID ? `${inputID}--label` : undefined),
    getHintID: (hintID?: string) => hintID || (inputID ? `${inputID}--hint` : undefined),
    getErrorMessageID: (errorMessageID?: string) =>
      errorMessageID || (inputID ? `${inputID}--error-message` : undefined),
  };

  return (
    <div
      className={classNames('nhsuk-form-group', { 'nhsuk-form-group--error': hasError }, className)}
      {...rest}
    >
      <FormGroupContext.Provider value={contextValue}>{children}</FormGroupContext.Provider>
    </div>
  );
};

export default FormGroup;
