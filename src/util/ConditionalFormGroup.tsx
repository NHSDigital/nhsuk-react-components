import React, { ComponentProps, useContext } from 'react';
import FormGroup from '../components/form-group';
import FormGroupContext from '../components/form-group/FormGroupContext';

const ConditionalFormGroup: React.FC<ComponentProps<typeof FormGroup>> = (props) => {
  const { isInsideFormGroup } = useContext(FormGroupContext);
  return isInsideFormGroup ? <>{props.children}</> : <FormGroup {...props} />;
};

export default ConditionalFormGroup;
