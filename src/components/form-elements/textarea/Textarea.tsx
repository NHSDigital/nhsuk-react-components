import React, { FC, HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import FormGroup from '@components/utils/FormGroup';

type TextareaProps = HTMLProps<HTMLTextAreaElement> &
  FormElementProps & { textareaRef?: MutableRefObject<HTMLTextAreaElement | null> };

const TextareaComponent: FC<TextareaProps> = (props) => (
  <FormGroup<TextareaProps> inputType="textarea" {...props}>
    {({ className, error, textareaRef, ...rest }) => (
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        ref={textareaRef}
        {...rest}
      />
    )}
  </FormGroup>
);

TextareaComponent.displayName = 'Textarea';

export default TextareaComponent;
