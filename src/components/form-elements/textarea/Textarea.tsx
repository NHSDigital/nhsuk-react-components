import React, { HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../../util/types/FormTypes';
import FormGroup from '../../../util/FormGroup';

type TextareaProps = HTMLProps<HTMLTextAreaElement> &
  FormElementProps & { textareaRef?: MutableRefObject<HTMLTextAreaElement | null> };

const Textarea: React.FC<TextareaProps> = ({ children, ...props }) => (
  <FormGroup<TextareaProps> inputType="textarea" {...props}>
    {({ className, error, textareaRef, ...rest }) => (
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        ref={textareaRef}
        {...rest}
      >
        {children}
      </textarea>
    )}
  </FormGroup>
);

export default Textarea;
