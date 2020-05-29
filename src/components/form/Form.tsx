import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import FormContext from './FormContext';

type FormProps = HTMLProps<HTMLFormElement> & {
  disableErrorFromComponents?: boolean;
};

const Form: React.FC<FormProps> = ({ className, disableErrorFromComponents, ...rest }) => (
  <FormContext.Provider value={{ disableErrorFromComponents: Boolean(disableErrorFromComponents) }}>
    <form className={classNames('nhsuk-form-group--wrapper', className)} {...rest} />
  </FormContext.Provider>
);

export default Form;
