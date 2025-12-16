'use client';

import classNames from 'classnames';
import {
  useContext,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
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
import { type FormElementProps, type FormElementRenderProps } from '#util/types/FormTypes.js';

export type FormGroupProps<
  P extends ComponentPropsWithoutRef<T>,
  T extends ElementType,
> = FormElementProps<P, T> & {
  children: (props: FormElementRenderProps<P, T>) => ReactNode;
  inputType?: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea';
};

export const FormGroup = <P extends ComponentPropsWithoutRef<T>, T extends ElementType>({
  children,
  inputType = 'input',
  hint,
  label,
  legend,
  legendProps,
  fieldsetProps,
  labelProps,
  error,
  hintProps,
  errorProps,
  formGroupProps,
  inputWrapperProps,
  id,
  name,
  ...rest
}: FormGroupProps<P, T>): JSX.Element => {
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
  let { 'aria-describedby': ariaDescribedBy } = rest;
  const ariaDescribedByIds = ariaDescribedBy ? [ariaDescribedBy] : [];

  // Add optional hint ID
  if (hint) {
    ariaDescribedByIds.push(hintID);
  }

  // Add optional error ID
  if (hasError) {
    ariaDescribedByIds.push(errorID);
  }

  // Update aria-describedby with new IDs
  ariaDescribedBy = ariaDescribedByIds.join(' ') || undefined;

  const { beforeInput, afterInput, ...formGroupRest } = formGroupProps ?? {};

  const childProps = {
    ...rest,
    error,
    'id': elementID,
    'name': name ?? elementID,
    'aria-describedby': !hasFieldset ? ariaDescribedBy : undefined,
  } as FormElementRenderProps<P, T>;

  useEffect(() => {
    passError(elementID, disableErrorFromComponents ? false : Boolean(error));
    return () => passError(elementID, false);
  }, [disableErrorFromComponents, elementID, error, passError]);

  useEffect(() => {
    registerComponent(elementID);
    return () => registerComponent(elementID, true);
  }, [elementID, registerComponent]);

  const input = (
    <>
      {beforeInput?.(childProps)}
      {children(childProps)}
      {afterInput?.(childProps)}
    </>
  );

  return (
    <div
      {...formGroupRest}
      className={classNames(
        'nhsuk-form-group',
        { 'nhsuk-form-group--error': hasError },
        formGroupRest?.className,
      )}
    >
      {hasFieldset ? (
        <Fieldset {...fieldsetProps} aria-describedby={ariaDescribedBy}>
          <Legend {...legendProps}>{legend}</Legend>
          <HintText id={hintID} {...hintProps}>
            {hint}
          </HintText>
          <ErrorMessage id={errorID} {...errorProps}>
            {error}
          </ErrorMessage>
          {input}
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
          {(inputType === 'input' || inputType === 'select') &&
          !!(beforeInput || afterInput || inputWrapperProps) ? (
            <div className="nhsuk-input-wrapper" {...inputWrapperProps}>
              {input}
            </div>
          ) : (
            input
          )}
        </>
      )}
    </div>
  );
};
