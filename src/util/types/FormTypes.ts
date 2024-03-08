import { HTMLProps } from 'react';
import { ErrorMessageProps } from '../../components/form-elements/error-message/ErrorMessage';
import { HintTextProps } from '../../components/form-elements/hint-text/HintText';
import { LabelProps } from '../../components/form-elements/label/Label';

export interface FormElementProps {
  label?: string;
  labelProps?: LabelProps;
  error?: string | boolean;
  errorProps?: ErrorMessageProps;
  hint?: string;
  hintProps?: HintTextProps;
  formGroupProps?: HTMLProps<HTMLDivElement>;
  disableErrorLine?: boolean;
  id?: string;
  name?: string;
}
