'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export type TextareaElementProps = ComponentPropsWithoutRef<'textarea'>;

export type TextareaProps = TextareaElementProps &
  Omit<
    FormElementProps<TextareaElementProps, 'textarea'>,
    'fieldsetProps' | 'legend' | 'legendProps'
  >;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => (
  <FormGroup<TextareaProps, 'textarea'> inputType="textarea" {...props}>
    {({ children, className, error, ...rest }) => (
      <>
        <textarea
          className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
          ref={forwardedRef}
          {...rest}
        />
        {children}
      </>
    )}
  </FormGroup>
));

Textarea.displayName = 'Textarea';
