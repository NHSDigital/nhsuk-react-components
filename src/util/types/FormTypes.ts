import React, { HTMLProps, ReactNode } from 'react';
import { ErrorMessageProps } from '../../components/error-message/ErrorMessage';
import { HintProps } from '../../components/hint/Hint';
import { LabelProps } from '../../components/label/Label';

export interface FormElementProps<T = HTMLElement> extends Omit<HTMLProps<T>, 'label'> {
  label?: ReactNode;
  labelProps?: LabelProps;
  error?: ReactNode;
  errorProps?: ErrorMessageProps;
  hint?: ReactNode;
  hintProps?: HintProps;
  formGroupProps?: HTMLProps<HTMLDivElement>;
  disableErrorLine?: boolean;
  id?: string;
  name?: string;
}

type FormElement = HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement;

type FormElementExcludedProps =
  | 'hint'
  | 'label'
  | 'labelProps'
  | 'hintProps'
  | 'errorProps'
  | 'inputType'
  | 'disableErrorLine';

export type FormElementRenderProps<T> = Omit<Text, FormElementExcludedProps> & {
  id: string;
  name: string;
};

// FormGroup
export enum FormGroupConsumer {
  INPUT = 'input',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  CHECKBOXES = 'checkboxes',
  RADIOS = 'radios',
  DATE_INPUT = 'dateinput',
}

type UseFormGroupRenderProps<T> = Omit<T, 'error' | 'id' | 'hint' | 'label' | 'name'> & {
  'aria-describedby': string;
  'aria-labelledby': string;
  error: ReactNode;
  name: string;
  id: string;
};

type UseFormGroupWrapperProps = {
  error?: boolean;
  _exposeContext?: boolean;
};

export type UseFormGroupType = <T extends FormElementProps>(
  type: FormGroupConsumer,
  props: T,
) => {
  Wrapper: React.ComponentType;
  labelBlock: ReactNode;
  renderProps: UseFormGroupRenderProps<T>;
  wrapperProps: UseFormGroupWrapperProps;
  isInFormGroup: boolean;
};
