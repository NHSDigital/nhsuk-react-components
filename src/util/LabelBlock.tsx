import React, { ComponentProps, ReactNode } from 'react';
import ErrorMessage from '../components/error-message/ErrorMessage';
import Hint from '../components/hint/Hint';
import Label from '../components/label/Label';

interface LabelBlockProps {
  elementID?: string;
  label?: ReactNode;
  labelProps?: ComponentProps<typeof Label>;
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
  error?: ReactNode | boolean;
  errorProps?: ComponentProps<typeof ErrorMessage>;
}

const LabelBlock: React.FC<LabelBlockProps> = ({
  label,
  labelProps,
  hint,
  hintProps,
  error,
  errorProps,
}) => (
  <>
    {label ? <Label {...labelProps}>{label}</Label> : null}
    {hint ? <Hint {...hintProps}>{hint}</Hint> : null}
    {error && typeof error === 'string' ? (
      <ErrorMessage {...errorProps}>{error}</ErrorMessage>
    ) : null}
  </>
);

export default LabelBlock;
