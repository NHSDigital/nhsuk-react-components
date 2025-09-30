import React, { ComponentPropsWithoutRef, FC } from 'react';
import FormContext from './FormContext';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  disableErrorFromComponents?: boolean;
};

const FormComponent: FC<FormProps> = ({ disableErrorFromComponents, ...rest }) => (
  <FormContext.Provider value={{ disableErrorFromComponents: Boolean(disableErrorFromComponents) }}>
    <form {...rest} />
  </FormContext.Provider>
);

FormComponent.displayName = 'Form';

export default FormComponent;
