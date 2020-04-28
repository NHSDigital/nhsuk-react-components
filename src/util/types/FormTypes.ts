import { ErrorMessageProps } from '../../components/error-message/ErrorMessage';
import { HintProps } from '../../components/hint/Hint';
import { LabelProps } from '../../components/label/Label';

export interface FormElementProps {
  label?: string;
  labelProps?: LabelProps;
  error?: string;
  errorProps?: ErrorMessageProps;
  hint?: string;
  hintProps?: HintProps
}
