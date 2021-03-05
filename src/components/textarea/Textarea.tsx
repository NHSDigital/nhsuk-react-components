import React, { HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';
import { FormGroupContext } from '../formgroup/FormGroupContext';

type TextareaProps = HTMLProps<HTMLTextAreaElement> & FormElementProps;

const Textarea: React.FC<TextareaProps> = props => {
  const { isInFormGroup, setInputID } = useContext(FormGroupContext);
  useEffect(() => {
    if (isInFormGroup && props.id) {
      setInputID(props.id);
      return () => {
        setInputID(undefined);
      };
    }
    return () => {};
  }, [isInFormGroup, props.id]);

  if (isInFormGroup) {
    const { className, error, ...rest } = props;
    return (
      <textarea
        className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
        {...rest}
      />
    );
  }

  return (
    <FormGroup<TextareaProps> inputType="textarea" {...props}>
      {({ className, error, ...rest }) => (
        <textarea
          className={classNames('nhsuk-textarea', { 'nhsuk-textarea--error': error }, className)}
          {...rest}
        />
      )}
    </FormGroup>
  );
};

export default Textarea;
