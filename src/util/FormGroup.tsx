import React, { ReactNode, useState, useEffect } from 'react';
import classNames from 'classnames';
import Hint, { HintProps } from '../components/hint/Hint';
import ErrorMessage, { ErrorMessageProps } from '../components/error-message/ErrorMessage';
import { generateRandomID } from './RandomID';
import Label, { LabelProps } from '../components/label/Label';

type FormGroupProps = {
  children: (props: any) => ReactNode;
  error?: boolean | string;
  label?: string;
  hint?: string;
  id?: string;
  labelProps?: LabelProps;
  hintProps?: HintProps;
  errorProps?: ErrorMessageProps;
  inputType: 'input';
};

const FormGroup = (props: FormGroupProps) => {
  const { children, hint, label, id, labelProps, error, hintProps, errorProps, ...rest } = props;
  const [elementID, setElementID] = useState<string>(id || generateRandomID(props.inputType));

  useEffect(() => {
    if (id !== undefined) {
      setElementID(id);
    } else {
      generateRandomID(props.inputType);
    }
  }, [props.id]);

  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  const childProps = {
    'aria-describedby': hint ? hintID : undefined,
    'aria-labelledby': label ? labelID : undefined,
    error,
    id: elementID,
    ...rest,
  };

  return (
    <div className={classNames('nhsuk-form-group', { 'nhsuk-form-group--error': error })}>
      {label ? (
        <Label id={labelID} htmlFor={elementID} {...labelProps}>
          {label}
        </Label>
      ) : null}
      {hint ? (
        <Hint id={hintID} {...hintProps}>
          {hint}
        </Hint>
      ) : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={errorID} {...errorProps}>
          {error}
        </ErrorMessage>
      ) : null}
      {props.children(childProps)}
    </div>
  );
};

export default FormGroup;
