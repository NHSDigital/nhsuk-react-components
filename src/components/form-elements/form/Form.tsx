'use client';

import { type ComponentPropsWithoutRef, type FC } from 'react';

import { FormContext } from './FormContext.js';

export type FormProps = ComponentPropsWithoutRef<'form'> & {
  disableErrorFromComponents?: boolean;
};

export const Form: FC<FormProps> = ({ disableErrorFromComponents, ...rest }) => (
  <FormContext.Provider value={{ disableErrorFromComponents: Boolean(disableErrorFromComponents) }}>
    <form {...rest} />
  </FormContext.Provider>
);

Form.displayName = 'Form';
