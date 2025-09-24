import React, { FC, HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import FormGroup from '@components/utils/FormGroup';
import { FormElementProps } from '@util/types/FormTypes';

type TextareaProps = HTMLProps<HTMLTextAreaElement> &
  FormElementProps & { textareaRef?: MutableRefObject<HTMLTextAreaElement | null> };

const TextareaComponent: FC<TextareaProps> = (props) => (
  <FormGroup<TextareaProps> inputType="textarea" {...props}>
    {({ children, className, error, textareaRef, ...rest }) => (
      <>
        <textarea
          className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
          ref={textareaRef}
          {...rest}
        />
        {children}
      </>
    )}
  </FormGroup>
);

export default TextareaComponent;
