// import React, { ReactNode, useState, HTMLProps, useContext } from 'react';
import React, { useState, HTMLProps } from 'react';
import classNames from 'classnames';
// import { FormElementProps } from '../../util/types/FormTypes';
// import FieldsetContext, { IFieldsetContext } from '../fieldset/FieldsetContext';
import { useFormContext } from '../form';
import FormGroupContext from './FormGroupContext';

/* type ExcludedProps =
  | 'hint'
  | 'label'
  | 'labelProps'
  | 'hintProps'
  | 'errorProps'
  | 'inputType'
  | 'disableErrorLine';

 type BaseFormElementRenderProps = HTMLProps<
  HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement
> & {
  error?: string | boolean;
}; */

interface FormGroupProps extends HTMLProps<HTMLDivElement> {
  error?: boolean;
  disableErrorLine?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = props => {
  const [inputID, setInputID] = useState<string>();

  const { error, children, className, disableErrorLine, ...rest } = props;
  /* const { isFieldset, registerComponent, passError } = useContext<IFieldsetContext>(
    FieldsetContext,
  ); */
  const { disableErrorFromComponents } = useFormContext();

  return (
    <div
      className={classNames(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorFromComponents && !disableErrorLine && error,
        },
        className,
      )}
      {...rest}
    >
      <FormGroupContext.Provider value={{ isInFormGroup: true, setInputID, inputID }}>
        {children}
      </FormGroupContext.Provider>
    </div>
  );
};

export default FormGroup;
