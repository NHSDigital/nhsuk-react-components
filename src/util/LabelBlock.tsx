import React, { ComponentProps, ReactNode } from 'react';
import ErrorMessage from '../components/error-message/ErrorMessage';
import Hint from '../components/hint/Hint';
import Label from '../components/label/Label';

export interface LabelBlockProps {
  elementID: string;
  label?: ReactNode;
  labelProps?: ComponentProps<typeof Label>;
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
  error?: ReactNode;
  errorProps?: ComponentProps<typeof ErrorMessage>;
}

const LabelBlock: React.FC<LabelBlockProps> = ({
  elementID,
  label,
  labelProps,
  hint,
  hintProps,
  error,
  errorProps,
}) => (
  <>
    {label ? (
      <Label id={elementID ? `${elementID}--label` : undefined} htmlFor={elementID} {...labelProps}>
        {label}
      </Label>
    ) : null}
    {hint ? (
      <Hint id={elementID ? `${elementID}--hint` : undefined} {...hintProps}>
        {hint}
      </Hint>
    ) : null}
    {error && typeof error === 'string' ? (
      <ErrorMessage id={elementID ? `${elementID}--error-message` : undefined} {...errorProps}>
        {error}
      </ErrorMessage>
    ) : null}
  </>
);

export default LabelBlock;
