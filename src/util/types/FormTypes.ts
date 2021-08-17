import { HTMLProps, ReactNode } from 'react';
import { ErrorMessageProps } from '../../components/error-message/ErrorMessage';
import { HintProps } from '../../components/hint/Hint';
import { LabelProps } from '../../components/label/Label';

export interface FormElementProps<T=HTMLElement> extends Omit<HTMLProps<T>, 'label'> {
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
