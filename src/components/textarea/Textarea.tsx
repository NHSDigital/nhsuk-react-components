import React from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import useFormGroup from '../../util/hooks/UseFormGroup';

type TextareaProps = FormElementProps<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = (props) => {
  const { FormGroupWrapper, LabelBlock, wrapperProps, renderProps } = useFormGroup(
    'textarea',
    props,
  );
  const { className, error, ...rest } = renderProps;

  return (
    <FormGroupWrapper {...wrapperProps}>
      {LabelBlock}
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        {...rest}
      />
    </FormGroupWrapper>
  );
};

export default Textarea;
