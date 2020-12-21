import { HTMLProps } from 'react';
import { ErrorMessageProps } from '../../components/error-message/ErrorMessage';
import { TextLinkProps } from '../../components/text-link/TextLink';
import { HintProps } from '../../components/hint/Hint';
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
  textLink?: TextLinkProps;
}
