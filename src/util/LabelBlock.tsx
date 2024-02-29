import React from 'react';
import HintText, { HintTextProps } from '../components/form-elements/hint-text/HintText';
import Label, { LabelProps } from '../components/form-elements/label/Label';
import ErrorMessage, { ErrorMessageProps } from '../components/form-elements/error-message/ErrorMessage';

interface LabelBlockProps {
  elementId?: string;
  label?: string;
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintTextProps;
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
      <HintText id={elementId ? `${elementId}--hint` : undefined} {...hintProps}>
        {hint}
      </HintText>
    ) : null}
    {error && typeof error === 'string' ? (
      <ErrorMessage id={elementId ? `${elementId}--error-message` : undefined} {...errorProps}>
        {error}
      </ErrorMessage>
    ) : null}
  </>
);

export default LabelBlock;
