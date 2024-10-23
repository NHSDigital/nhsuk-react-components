'use client';
import React, { ReactNode, useState, useEffect, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HintText from '../form-elements/hint-text/HintText';
import ErrorMessage from '../form-elements/error-message/ErrorMessage';
import { generateRandomID } from '../../util/RandomID';
import Label from '../form-elements/label/Label';
import { FormElementProps } from '../../util/types/FormTypes';
import { useFormContext } from '../form-elements/form';
import FormGroupContext, { IFormGroupContext } from './FormGroupContext';

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

export type SingleInputFormGroupProps<T> = FormElementProps & {
  children: (props: FormElementRenderProps<T>) => ReactNode;
  inputType: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea';
};

const SingleInputFormGroup = <T extends BaseFormElementRenderProps>(
  props: SingleInputFormGroupProps<T>,
): JSX.Element => {
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
  const { registerComponent, passError } = useContext<IFormGroupContext>(FormGroupContext);
  const { disableErrorFromComponents } = useFormContext();

  const elementID = id ?? generatedID;
  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  const ariaDescribedBy = [hint ? hintID : undefined, error ? errorID : undefined].filter(Boolean);

  const childProps = {
    'aria-describedby': ariaDescribedBy.join(' ') || undefined,
    error,
    name: name ?? elementID,
    id: elementID,
    ...rest,
  } as FormElementRenderProps<T>;

  useEffect(() => {
    passError(elementID, disableErrorFromComponents ? false : Boolean(error));
    return () => passError(elementID, false);
  }, [elementID, error]);

  useEffect(() => {
    registerComponent(elementID);
    return () => registerComponent(elementID, true);
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

export default SingleInputFormGroup;
