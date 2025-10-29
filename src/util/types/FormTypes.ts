import { type ErrorMessageProps } from '#components/form-elements/error-message/index.js';
import { type FieldsetProps } from '#components/form-elements/fieldset/index.js';
import { type HintTextProps } from '#components/form-elements/hint-text/index.js';
import { type LabelProps } from '#components/form-elements/label/index.js';
import { type LegendProps } from '#components/form-elements/legend/index.js';
import { type ComponentPropsWithDataAttributes } from '#util/types/NHSUKTypes.js';

export interface FormElementProps {
  'fieldsetProps'?: FieldsetProps;
  'legend'?: string;
  'legendProps'?: LegendProps;
  'label'?: string;
  'labelProps'?: LabelProps;
  'error'?: React.ReactNode;
  'errorProps'?: ErrorMessageProps;
  'hint'?: React.ReactNode;
  'hintProps'?: HintTextProps;
  'formGroupProps'?: ComponentPropsWithDataAttributes<'div'>;
  'id'?: string;
  'name'?: string;
  'aria-describedby'?: string;
}
