import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { generateRandomID } from '../RandomID';
import { FormElementProps } from '../types/FormTypes';
import FormGroupContext from '../../components/formgroup/FormGroupContext';
import Label from '../../components/label';
import Hint from '../../components/hint';
import ErrorMessage from '../../components/error-message';
import FormGroup from '../../components/formgroup';

export type FormGroupConsumerType = 'input' | 'select' | 'textarea' | 'checkboxes' | 'radios' | 'dateinput';

type UseFormGroupRenderProps<T> = {
  'aria-describedby': string;
  'aria-labelledby': string;
  error: ReactNode;
  name: string;
  id: string;
} & Omit<T, 'error' | 'id' | 'hint' | 'label' | 'name'>;

type UseFormGroupWrapperProps = {
  error?: boolean;
  _exposeContext?: boolean;
};

type UseFormGroup = <T extends FormElementProps>(
  type: FormGroupConsumerType,
  props: T,
) => {
  FormGroupWrapper: typeof FormGroup | typeof React.Fragment;
  LabelBlock: ReactNode;
  renderProps: UseFormGroupRenderProps<T>;
  wrapperProps: UseFormGroupWrapperProps;
  isInFormGroup: boolean;
};

const useFormGroup: UseFormGroup = (type, props) => {
  const { isInFormGroup, error: formGroupError, setInputID } = useContext(FormGroupContext);
  const [generatedID] = useState(() => generateRandomID(type));
  const { id, hint, label, error, name, ...rest } = props;

  const elementID = id || generatedID;
  const labelID = `${elementID}--label`;
  const errorID = `${elementID}--error-message`;
  const hintID = `${elementID}--hint`;

  useEffect(() => setInputID(elementID), [elementID]);

  const renderProps = {
    'aria-describedby': hint ? hintID : undefined,
    'aria-labelledby': label ? labelID : undefined,
    error: error || formGroupError,
    name: name || elementID,
    id: elementID,
    ...rest,
  };
  const wrapperProps = isInFormGroup
    ? {}
    : { error: Boolean(renderProps.error), _exposeContext: false };

  const FormGroupWrapper = isInFormGroup ? React.Fragment : FormGroup;
  const LabelBlock = (
    <>
      {label && (
        <Label id={labelID} {...props.labelProps}>
          {label}
        </Label>
      )}
      {hint && (
        <Hint id={hintID} {...props.hintProps}>
          {hint}
        </Hint>
      )}
      {error && typeof error === 'string' && (
        <ErrorMessage id={errorID} {...props.errorProps}>
          {error}
        </ErrorMessage>
      )}
    </>
  );

  return {
    FormGroupWrapper,
    LabelBlock,
    renderProps,
    wrapperProps,
    isInFormGroup,
  };
};

export default useFormGroup;
