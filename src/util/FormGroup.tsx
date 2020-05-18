import React, { ReactNode, useState, useEffect, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import Hint from '../components/hint/Hint';
import ErrorMessage from '../components/error-message/ErrorMessage';
import { generateRandomID } from './RandomID';
import Label from '../components/label/Label';
import { FormElementProps } from './types/FormTypes';
import FieldsetContext, { IFieldsetContext } from '../components/fieldset/FieldsetContext';
import { useFormContext } from '../components/form';

type ExcludedProps =
  | 'hint'
  | 'label'
  | 'labelProps'
  | 'hintProps'
  | 'errorProps'
  | 'inputType'
  | 'disableErrorLine';

type BaseFormElementRenderProps = HTMLProps<
  HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement
> & {
  error?: string | boolean;
};

type FormElementRenderProps<T> = Omit<T, ExcludedProps> & {
  id: string;
  name: string;
};

type FormGroupProps<T> = FormElementProps & {
  children: (props: FormElementRenderProps<T>) => ReactNode;
  inputType: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea';
};

const FormGroup = <T extends BaseFormElementRenderProps>(props: FormGroupProps<T>) => {
  const {
    children,
    hint,
    label,
    id,
    labelProps,
    error,
    hintProps,
    errorProps,
    inputType,
    disableErrorLine,
    name,
    ...rest
  } = props;
  const [elementID, setElementID] = useState<string>(id || generateRandomID(inputType));
  const { isFieldset, registerComponent, passError } = useContext<IFieldsetContext>(
    FieldsetContext,
  );
  const { disableErrorFromComponents } = useFormContext();

  useEffect(() => {
    if (id !== undefined) {
      setElementID(id);
    } else if (elementID === undefined) {
      setElementID(generateRandomID(props.inputType));
    }
  }, [props.id]);

  useEffect(() => {
    if (!isFieldset) return () => {};
    passError(elementID, disableErrorFromComponents ? false : Boolean(error));
    return () => passError(elementID, false);
  }, [elementID, error, isFieldset]);

  useEffect(() => {
    registerComponent(elementID);
    return () => registerComponent(elementID, true);
  }, []);

  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  const childProps = {
    'aria-describedby': hint ? hintID : undefined,
    'aria-labelledby': label ? labelID : undefined,
    error,
    name: name || elementID,
    id: elementID,
    ...rest,
  } as FormElementRenderProps<T>;

  return (
    <div
      className={classNames('nhsuk-form-group', {
        'nhsuk-form-group--error': !disableErrorFromComponents && !disableErrorLine && error,
      })}
    >
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
      {!disableErrorFromComponents && error && typeof error === 'string' ? (
        <ErrorMessage id={errorID} {...errorProps}>
          {error}
        </ErrorMessage>
      ) : null}
      {children(childProps)}
    </div>
  );
};

export default FormGroup;
