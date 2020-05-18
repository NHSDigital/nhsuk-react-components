import React, { HTMLProps } from 'react';
import classNames from 'classnames';

type FormProps = HTMLProps<HTMLFormElement> & {
  disableErrorFromComponents?: boolean;
};

const Form: React.FC<FormProps> = ({ className, disableErrorFromComponents, ...rest }) => (
  <form className={classNames('nhsuk-form-group--wrapper', className)} {...rest} />
);

export default Form;
