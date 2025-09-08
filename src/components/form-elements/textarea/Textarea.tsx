import React, { FC, HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import SingleInputFormGroup from '@components/utils/SingleInputFormGroup';

type TextareaProps = HTMLProps<HTMLTextAreaElement> &
  FormElementProps & { textareaRef?: MutableRefObject<HTMLTextAreaElement | null> };

const TextareaComponent: FC<TextareaProps> = (props) => (
  <SingleInputFormGroup <TextareaProps> inputType="textarea" {...props}>
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
  </SingleInputFormGroup>
);

export default TextareaComponent;
