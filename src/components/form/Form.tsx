import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const Form: React.FC<HTMLProps<HTMLFormElement>> = ({ className, ...rest }) => (
  <form className={classNames('nhsuk-form-group--wrapper', className)} {...rest} />
);

export default Form;
