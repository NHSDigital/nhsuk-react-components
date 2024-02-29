import React from 'react';
import Hint, { HintProps } from '../components/form-elements/hint-text/HintText';
import Label, { LabelProps } from '../components/label/Label';
import ErrorMessage, { ErrorMessageProps } from '../components/form-elements/error-message/ErrorMessage';

interface LabelBlockProps {
  elementId?: string;
  label?: string;
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintProps;
  error?: string | boolean;
  errorProps?: ErrorMessageProps;
}

const LabelBlock: React.FC<LabelBlockProps> = ({
  elementId,
  label,
  labelProps,
  hint,
  hintProps,
  error,
  errorProps,
}) => (
  <>
    {label ? (
      <Label id={elementId ? `${elementId}--label` : undefined} htmlFor={elementId} {...labelProps}>
        {label}
      </Label>
    ) : null}
    {hint ? (
      <Hint id={elementId ? `${elementId}--hint` : undefined} {...hintProps}>
        {hint}
      </Hint>
    ) : null}
    {error && typeof error === 'string' ? (
      <ErrorMessage id={elementId ? `${elementId}--error-message` : undefined} {...errorProps}>
        {error}
      </ErrorMessage>
    ) : null}
  </>
);

export default LabelBlock;
