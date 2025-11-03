'use client';

import classNames from 'classnames';
import {
  useContext,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type JSX,
  type ReactNode,
} from 'react';

import { FormGroupContext, type IFormGroupContext } from './FormGroupContext.js';

import { ErrorMessage } from '#components/form-elements/error-message/index.js';
import { Fieldset } from '#components/form-elements/fieldset/index.js';
import { useFormContext } from '#components/form-elements/form/index.js';
import { HintText } from '#components/form-elements/hint-text/index.js';
import { Label } from '#components/form-elements/label/index.js';
import { Legend } from '#components/form-elements/legend/index.js';
import { generateRandomID } from '#util/tools/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

type ExcludedProps =
  | Extract<
      keyof FormElementProps,
      | 'legend'
      | 'legendProps'
      | 'fieldsetProps'
      | 'hint'
      | 'hintProps'
      | 'label'
      | 'labelProps'
      | 'errorProps'
      | 'disableErrorLine'
    >
  | 'inputType';

type BaseFormElementRenderProps = ComponentPropsWithoutRef<
  'div' | 'input' | 'select' | 'textarea'
> &
  Pick<FormElementProps, 'error'>;

export type FormElementRenderProps<T> = Omit<T, ExcludedProps> & {
  id: string;
  name: string;
};

export type FormGroupProps<T> = FormElementProps & {
  children: (props: FormElementRenderProps<T>) => ReactNode;
  inputType: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea';
};

export const FormGroup = <T extends BaseFormElementRenderProps>(
  props: FormGroupProps<T>,
): JSX.Element => {
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
  const hasError = !disableErrorFromComponents && !!error;

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
  }, [disableErrorFromComponents, elementID, error, passError]);

  useEffect(() => {
    registerComponent(elementID);
    return () => registerComponent(elementID, true);
  }, [elementID, registerComponent]);

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
