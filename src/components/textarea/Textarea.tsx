import classNames from 'classnames';
import React from 'react';
import useFormGroup from '../../util/hooks/UseFormGroup';
import LabelBlock from '../../util/LabelBlock';
import { FormElementProps, InputType } from '../../util/types/FormTypes';

type TextareaProps = FormElementProps<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = (props) => {
  const { FormGroup, renderProps } = useFormGroup(InputType.TEXTAREA, props);

  const { className, error, ...rest } = renderProps;

  return (
    <FormGroup error={error}>
      <LabelBlock elementId={renderProps.id} error={error} {...renderProps} />
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        {...rest}
      />
    </FormGroup>
  );
};

export default Textarea;
