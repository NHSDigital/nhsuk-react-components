'use client';
import React, { ReactNode, useState, useEffect, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HintText from '../components/form-elements/hint-text/HintText';
import ErrorMessage from '../components/form-elements/error-message/ErrorMessage';
import { generateRandomID } from './RandomID';
import Label from '../components/form-elements/label/Label';
import { FormElementProps, InputType } from './types/FormTypes';
import FieldsetContext, {
  IFieldsetContext,
} from '../components/form-elements/fieldset/FieldsetContext';
import { useFormContext } from '../components/form-elements/form';

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

export type FormGroupProps<T> = FormElementProps & {
  children: (props: FormElementRenderProps<T>) => ReactNode;
  inputType: InputType;
};

const FormGroup = <T extends BaseFormElementRenderProps>(props: FormGroupProps<T>): JSX.Element => {
  const {
    children,
    hint,
    label,
    id,
    labelProps,
    error,
    hintProps,
    errorProps,
    formGroupProps,
    inputType,
    disableErrorLine,
    name,
    ...rest
  } = props;
  const [generatedID] = useState<string>(generateRandomID(inputType));
  const { isFieldset, registerComponent, passError } =
    useContext<IFieldsetContext>(FieldsetContext);
  const { disableErrorFromComponents } = useFormContext();

  const elementID = id || generatedID;
  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  const ariaDescribedBy = [hint ? hintID : undefined, error ? errorID : undefined].filter(Boolean);

  const childProps = {
    'aria-describedby': ariaDescribedBy.join(' ') || undefined,
    error,
    name: name || elementID,
    id: elementID,
    ...rest,
  } as FormElementRenderProps<T>;

  useEffect(() => {
    if (!isFieldset) return;
    passError(elementID, disableErrorFromComponents ? false : Boolean(error));
    return () => passError(elementID, false);
  }, [elementID, error, isFieldset]);

  useEffect(() => {
    registerComponent(elementID, inputType);
    return () => registerComponent(elementID, inputType, true);
  }, []);

  const { className: formGroupClassName, ...formGroupRestProps } = formGroupProps || {};

  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorFromComponents && !disableErrorLine && error,
        },
        formGroupClassName,
      )}
      {...formGroupRestProps}
    >
      {label ? (
        <Label id={labelID} htmlFor={elementID} {...labelProps}>
          {label}
        </Label>
      ) : null}
      {hint ? (
        <HintText id={hintID} {...hintProps}>
          {hint}
        </HintText>
      ) : null}
      {error && typeof error === 'string' ? (
        <ErrorMessage id={errorID} {...errorProps}>
          {error}
        </ErrorMessage>
      ) : null}
      {children(childProps)}
    </div>
  );
};

export default FormGroup;
