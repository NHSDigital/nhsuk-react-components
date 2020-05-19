import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';

type TextareaProps = HTMLProps<HTMLTextAreaElement> & FormElementProps;

const Textarea: React.FC<TextareaProps> = props => (
  <FormGroup<TextareaProps> inputType="textarea" {...props}>
    {({ className, error, ...rest }) => (
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        {...rest}
      />
    )}
  </FormGroup>
);

export default Textarea;
