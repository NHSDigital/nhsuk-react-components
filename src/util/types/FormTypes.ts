import { ComponentPropsWithRef } from 'react';
import { ErrorMessageProps } from '@components/form-elements/error-message/ErrorMessage';
import { HintTextProps } from '@components/form-elements/hint-text/HintText';
import { LabelProps } from '@components/form-elements/label/Label';
import { FieldsetProps } from '@components/form-elements/fieldset/Fieldset';
import { LegendProps } from '@components/form-elements/legend/Legend';

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
