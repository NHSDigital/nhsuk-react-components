import { Fragment, useContext, useEffect, useState } from 'react';
import { FormGroup } from '../..';
import FormGroupContext from '../../components/form-group/FormGroupContext';
import { generateRandomID } from '../RandomID';

const useFormGroup = (type, props) => {
  // const {
  //   isInFormGroup,
  //   error: formGroupError,
  //   setInputID,
  //   setError,
  // } = useContext(FormGroupContext);
  // const { id, hint, hintProps, label, labelProps, error, errorProps, name, ...rest } = props;
  // const elementID = id || generatedID;
  // const renderProps = {
  //   'aria-describedby': hint ? `${elementID}--hint` : undefined,
  //   'aria-labelledby': label ? `${elementID}--label` : undefined,
  //   error: error || formGroupError,
  //   name: name || elementID,
  //   id: elementID,
  //   ...rest,
  // };
  // const wrapperProps = isInFormGroup
  //   ? {}
  //   : {
  //       error: Boolean(renderProps.error),
  //       _exposeContext: false,
  //     };
  // const Wrapper = isInFormGroup ? React.Fragment : FormGroup;
  // useEffect(() => setError(Boolean(props.error)), [props.error]);
  // useEffect(() => setInputID(elementID), [elementID]);
  // return {
  //   Wrapper,
  //   labelBlock: (
  //     <LabelBlock
  //       elementId={elementID}
  //       label={label}
  //       labelProps={labelProps}
  //       hint={hint}
  //       hintProps={hintProps}
  //       error={error}
  //       errorProps={errorProps}
  //     />
  //   ),
  //   renderProps,
  //   wrapperProps,
  //   isInFormGroup,
  // };
  const [generatedID] = useState(() => generateRandomID(type));
  const elementID = props.id || generatedID;

  const { isInFormGroup, setInputID, setError } = useContext(FormGroupContext);

  const renderProps = {
    ...props,
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
