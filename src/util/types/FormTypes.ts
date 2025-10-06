import { type ComponentPropsWithRef } from 'react';

import { type ErrorMessageProps } from '#components/form-elements/error-message';
import { type FieldsetProps } from '#components/form-elements/fieldset';
import { type HintTextProps } from '#components/form-elements/hint-text';
import { type LabelProps } from '#components/form-elements/label';
import { type LegendProps } from '#components/form-elements/legend';

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
