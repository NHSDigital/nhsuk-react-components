import React, { HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import Legend from '../legend/Legend';
import FormGroup from '../../utils/FormGroup';

export interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  fieldsetRef?: MutableRefObject<HTMLFieldSetElement | null>;
  disableErrorLine?: boolean;
}

const FieldsetComponent = ({
  className,
  fieldsetRef,
  disableErrorLine,
  ...rest
}: FieldsetProps) => {
  return (
    <FormGroup enableErrorLine={!disableErrorLine}>
      <fieldset className={classNames('nhsuk-fieldset', className)} ref={fieldsetRef} {...rest} />
    </FormGroup>
  );
};

FieldsetComponent.Legend = Legend;

export default FieldsetComponent;
