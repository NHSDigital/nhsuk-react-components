import { ComponentProps, HTMLProps, ReactNode, useContext, useRef } from 'react';
import { ErrorMessage, Hint, Label } from '../..';
import FormGroupContext from '../../components/form-group/FormGroupContext';
import LabelBlock from '../LabelBlock';
import { generateRandomName } from '../RandomID';

export enum InputType {
  CHECKBOXES = 'checkboxes',
  DATE_INPUT = 'dateinput',
  INPUT = 'input',
  RADIOS = 'radios',
  SELECT = 'select',
  TEXTAREA = 'textarea',
}

export interface FormElementProps<T extends HTMLElement> extends Omit<HTMLProps<T>, 'label'> {
  label?: ReactNode;
  labelProps?: ComponentProps<typeof Label>;
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
  error?: ReactNode;
  errorProps?: ComponentProps<typeof ErrorMessage>;
}

const useFormComponent = <T extends HTMLElement, P extends FormElementProps<T>>(
  inputType: InputType,
  props: P,
) => {
  const { isInsideFormGroup, passError } = useContext(FormGroupContext);
  const generatedID = useRef(generateRandomName(inputType));
  const elementID = props.id || generatedID.current;

  const { label, labelProps, hint, hintProps, error, errorProps, ...restProps } = props;

  const labelBlockProps: ComponentProps<typeof LabelBlock> = {
    elementID,
    label,
    labelProps,
    hint,
    hintProps,
    error,
    errorProps,
  };

  if (isInsideFormGroup) passError(elementID, !!error);

  return {
    renderProps: { ...restProps, id: elementID },
    labelBlockProps,
  };
};

export default useFormComponent;
