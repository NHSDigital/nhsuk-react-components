import React, { type ComponentPropsWithoutRef, type FC } from 'react';
import { FormContext } from '.';

export type FormProps = ComponentPropsWithoutRef<'form'> & {
  disableErrorFromComponents?: boolean;
};

export const Form: FC<FormProps> = ({ disableErrorFromComponents, ...rest }) => (
  <FormContext.Provider value={{ disableErrorFromComponents: Boolean(disableErrorFromComponents) }}>
    <form {...rest} />
  </FormContext.Provider>
);

Form.displayName = 'Form';
