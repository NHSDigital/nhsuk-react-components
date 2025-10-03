import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { FormGroup } from '#components/utils';
import { type FormElementProps } from '#util/types';

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> &
  Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => (
  <FormGroup<TextareaProps> inputType="textarea" {...props}>
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
