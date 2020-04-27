import React, { HTMLProps, useState, useContext } from 'react';
import classNames from 'classnames';
import { generateRandomName } from '../../util/RandomName';
import LabelBlock from '../utils/LabelBlock';
import { HintProps } from '../hint/Hint';
import { ErrorMessageProps } from '../error-message/ErrorMessage';
import { LabelProps } from '../label/Label';
import FormContext from '../form/FormContext';

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintProps;
  error?: boolean | string;
  errorProps?: ErrorMessageProps;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  label,
  labelProps,
  hint,
  hintProps,
  error,
  errorProps,
  id,
  name,
  ...rest
}) => {
  const { isForm, setError } = useContext(FormContext);
  const [selectName] = useState<string>(name || generateRandomName('textarea'));
  if (isForm) {
    setError(selectName, Boolean(error));
  }
  return (
    <>
      <LabelBlock
        elementId={id}
        label={label}
        labelProps={labelProps}
        error={error}
        errorProps={errorProps}
        hint={hint}
        hintProps={hintProps}
      />
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        id={id}
        name={selectName}
        {...rest}
      />
    </>
  );
};

export default Textarea;
