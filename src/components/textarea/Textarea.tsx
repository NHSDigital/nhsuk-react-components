import React, { HTMLProps, useState, useContext } from 'react';
import classNames from 'classnames';
import Label from '../label';
import Hint from '../hint';
import FormContext from '../form/FormContext';
import ErrorMessage from '../error-message';

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  hint?: string;
  error?: boolean | string;
}

const Textarea: React.FC<TextareaProps> = ({ className, label, hint, error, id, ...rest }) => {
  const { isForm, setError } = useContext(FormContext);
  const [selectName] = useState<string>(
    name || `select_${(Math.random() + 1).toString(36).substring(2, 7)}`,
  );
  if (isForm) {
    setError(selectName, Boolean(error));
  }
  return (
    <>
      {label ? (
        <Label id={id ? `${id}--label` : undefined} htmlFor={id}>
          {label}
        </Label>
      ) : null}
      {hint ? <Hint id={id ? `${id}--label` : undefined}>{hint}</Hint> : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={id ? `${id}--error` : id}>{error}</ErrorMessage>
      ) : null}
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        id={id}
        name={selectName}
        {...rest}
      ></textarea>
    </>
  );
};

export default Textarea;
