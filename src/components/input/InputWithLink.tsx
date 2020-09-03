import { FormGroup, Input } from 'nhsuk-react-components';

import React from 'react';

const InputProps = {
  hint: null,
  label: null,
  link: null,
  linkText: null,
};

const InputWithLink = () => (
  <FormGroup>
    <Input hint={InputProps.hint} label={InputProps.label} {...rest} />
    <a href={InputProps.link}>{InputProps.linkText}</a>
  </FormGroup>
);

export default InputWithLink;
