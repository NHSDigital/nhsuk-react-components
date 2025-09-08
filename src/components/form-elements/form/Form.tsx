import React from 'react';
import FormContext from './FormContext';

type FormProps = React.HTMLProps<HTMLFormElement> & {
  disableErrorFromComponents?: boolean;
};

const Form: React.FC<FormProps> = ({ disableErrorFromComponents, ...rest }) => (
  <FormContext.Provider value={{ disableErrorFromComponents: Boolean(disableErrorFromComponents) }}>
    <form {...rest} />
  </FormContext.Provider>
);

export default Form;
