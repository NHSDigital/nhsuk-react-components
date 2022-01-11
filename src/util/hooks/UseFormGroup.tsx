import { Fragment, useContext, useEffect, useState } from 'react';
import { FormGroup } from '../..';
import FormGroupContext from '../../components/form-group/FormGroupContext';
import { generateRandomID } from '../RandomID';
import { BaseFormElementProps, InputType } from '../types/FormTypes';

type UseFormGroupType = <P extends BaseFormElementProps>(
  type: InputType,
  props: P,
) => {
  FormGroup: typeof FormGroup;
  renderProps: P;
};

const useFormGroup: UseFormGroupType = (type, props) => {
  const [generatedID] = useState(() => generateRandomID(type));
  const elementID = props.id || generatedID;

  const { isInFormGroup, setInputID, setError } = useContext(FormGroupContext);

  const renderProps = {
    ...props,
    'aria-labelledby': props.label ? `${elementID}--label` : undefined,
    'aria-describedby': props.hint ? `${elementID}--hint` : undefined,
    id: elementID,
    name: props.name || elementID,
  };

  useEffect(() => {
    if (typeof props.error === 'boolean') setError(props.error);
  }, [props.error]);
  useEffect(() => setInputID(elementID), [elementID]);

  return {
    FormGroup: isInFormGroup ? Fragment : FormGroup,
    renderProps,
  };
};

export default useFormGroup;
