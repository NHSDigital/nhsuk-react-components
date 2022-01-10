import React, { useContext, useEffect, useState } from 'react';
import FormGroup from '../../components/form-group';
import FormGroupContext from '../../components/form-group/FormGroupContext';
import LabelBlock from '../LabelBlock';
import { generateRandomID } from '../RandomID';
import { UseFormGroupType } from '../types/FormTypes';

const useFormGroup: UseFormGroupType = (type, props) => {
  const formGroupCtx = useContext(FormGroupContext);

  const Wrapper = formGroupCtx.isInFormGroup
    ? React.Fragment
    : ({ children }) => (
        <FormGroup error={Boolean(props.error)} _exposeContext={false}>
          {children}
        </FormGroup>
      );


  const labelBlock = <LabelBlock elementId={}/>

  return {
    Wrapper,
  };
};

const useFormGroupOld: UseFormGroupType = (type, props) => {
  const [generatedID] = useState(() => generateRandomID(type));
  const {
    isInFormGroup,
    error: formGroupError,
    setInputID,
    setError,
  } = useContext(FormGroupContext);

  const { id, hint, hintProps, label, labelProps, error, errorProps, name, ...rest } = props;
  const elementID = id || generatedID;

  const renderProps = {
    'aria-describedby': hint ? `${elementID}--hint` : undefined,
    'aria-labelledby': label ? `${elementID}--label` : undefined,
    error: error || formGroupError,
    name: name || elementID,
    id: elementID,
    ...rest,
  };

  const wrapperProps = isInFormGroup
    ? {}
    : {
        error: Boolean(renderProps.error),
        _exposeContext: false,
      };

  const Wrapper = isInFormGroup ? React.Fragment : FormGroup;

  useEffect(() => setError(Boolean(props.error)), [props.error]);
  useEffect(() => setInputID(elementID), [elementID]);

  return {
    Wrapper,
    labelBlock: (
      <LabelBlock
        elementId={elementID}
        label={label}
        labelProps={labelProps}
        hint={hint}
        hintProps={hintProps}
        error={error}
        errorProps={errorProps}
      />
    ),
    renderProps,
    wrapperProps,
    isInFormGroup,
  };
};

export default useFormGroup;
