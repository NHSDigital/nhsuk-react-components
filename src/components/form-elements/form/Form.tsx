import React, { HTMLProps } from 'react';
import FormContext from './FormContext';

type FormProps = HTMLProps<HTMLFormElement> & {
  disableErrorFromComponents?: boolean;
};

const Form: React.FC<FormProps> = ({ disableErrorFromComponents, ...rest }) => (
  <FormContext.Provider value={{ disableErrorFromComponents: Boolean(disableErrorFromComponents) }}>
    <form {...rest} />
  </FormContext.Provider>
);

export default Form;
