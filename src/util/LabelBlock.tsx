import React, { ComponentProps, ReactNode } from 'react';
import ErrorMessage from '../components/error-message/ErrorMessage';
import Hint from '../components/hint/Hint';
import Label from '../components/label/Label';

interface LabelBlockProps {
  elementId?: string;
  label?: ReactNode;
  labelProps?: ComponentProps<typeof Label>;
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
  error?: ReactNode | boolean;
  errorProps?: ComponentProps<typeof ErrorMessage>;
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
