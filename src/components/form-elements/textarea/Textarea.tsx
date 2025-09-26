import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';
import FormGroup from '@components/utils/FormGroup';
import { FormElementProps } from '@util/types/FormTypes';

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> &
  Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'>;

const TextareaComponent = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef) => (
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

TextareaComponent.displayName = 'Textarea';

export default TextareaComponent;
