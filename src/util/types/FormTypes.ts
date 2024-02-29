import { HTMLProps } from 'react';
import { ErrorMessageProps } from '../../components/form-elements/error-message/ErrorMessage';
import { HintProps } from '../../components/form-elements/hint-text/HintText';
import { LabelProps } from '../../components/label/Label';

export interface FormElementProps {
  label?: string;
  labelProps?: LabelProps;
  error?: string | boolean;
  errorProps?: ErrorMessageProps;
  hint?: string;
  hintProps?: HintProps;
  formGroupProps?: HTMLProps<HTMLDivElement>;
  disableErrorLine?: boolean;
  id?: string;
  name?: string;
}
