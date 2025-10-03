import { type ComponentPropsWithRef } from 'react';
import {
  type ErrorMessageProps,
  type FieldsetProps,
  type HintTextProps,
  type LabelProps,
  type LegendProps,
} from '#components/form-elements';

export interface FormElementProps {
  fieldsetProps?: FieldsetProps;
  legend?: string;
  legendProps?: LegendProps;
  label?: string;
  labelProps?: LabelProps;
  error?: string;
  errorProps?: ErrorMessageProps;
  hint?: string;
  hintProps?: HintTextProps;
  formGroupProps?: ComponentPropsWithRef<'div'> & {
    'data-module'?: string;
    'data-maxlength'?: number;
    'data-maxwords'?: number;
    'data-threshold'?: number;
  };
  id?: string;
  name?: string;
  'aria-describedby'?: string;
}
