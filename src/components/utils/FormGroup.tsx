'use client';
import React, { ReactNode, useState, useEffect, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import ErrorMessage from '../form-elements/error-message/ErrorMessage';
import Fieldset from '../form-elements/fieldset/Fieldset';
import HintText from '../form-elements/hint-text/HintText';
import Label from '../form-elements/label/Label';
import Legend from '../form-elements/legend/Legend';
import { useFormContext } from '../form-elements/form';
import { generateRandomID } from '../../util/RandomID';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroupContext, { IFormGroupContext } from './FormGroupContext';

type ExcludedProps =
  | 'legend'
  | 'legendProps'
  | 'fieldsetProps'
  | 'hint'
  | 'hintProps'
  | 'label'
  | 'labelProps'
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
  inputType: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea';
};

const FormGroup = <T extends BaseFormElementRenderProps>(props: FormGroupProps<T>): JSX.Element => {
  const {
    children,
    hint,
    label,
    id,
    legend,
    legendProps,
    fieldsetProps,
    labelProps,
    error,
    hintProps,
    errorProps,
    formGroupProps,
    inputType,
    disableErrorLine,
    name,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props;
  const [generatedID] = useState<string>(generateRandomID(inputType));
  const { registerComponent, passError } = useContext<IFormGroupContext>(FormGroupContext);
  const { disableErrorFromComponents } = useFormContext();

  const elementID = id ?? generatedID;
  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  const hasFieldset = !!(legend || legendProps || fieldsetProps);
  const hasError = !disableErrorFromComponents && !disableErrorLine && error;

  // Build list of IDs for aria-describedby
  const ariaDescribedByIds = ariaDescribedBy ? [ariaDescribedBy] : [];

  // Add optional hint ID
  if (hint) {
    ariaDescribedByIds.push(hintID);
  }

  // Add optional error ID
  if (hasError) {
    ariaDescribedByIds.push(errorID);
  }

  const childProps = {
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

  return (
    <div
      {...formGroupProps}
      className={classNames(
        'nhsuk-form-group',
        { 'nhsuk-form-group--error': hasError },
        formGroupProps?.className,
      )}
    >
      {hasFieldset ? (
        <Fieldset {...fieldsetProps} aria-describedby={ariaDescribedByIds.join(' ') || undefined}>
          <Legend {...legendProps}>{legend}</Legend>
          <HintText id={hintID} {...hintProps}>
            {hint}
          </HintText>
          <ErrorMessage id={errorID} {...errorProps}>
            {error}
          </ErrorMessage>
          {children(childProps)}
        </Fieldset>
      ) : (
        <>
          <Label id={labelID} htmlFor={elementID} {...labelProps}>
            {label}
          </Label>
          <HintText id={hintID} {...hintProps}>
            {hint}
          </HintText>
          <ErrorMessage id={errorID} {...errorProps}>
            {error}
          </ErrorMessage>
          {children({
            ...childProps,
            'aria-describedby': ariaDescribedByIds.join(' ') || undefined,
          })}
        </>
      )}
    </div>
  );
};

export default FormGroup;
