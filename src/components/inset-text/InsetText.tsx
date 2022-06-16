import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import VisuallyHidden from '../visually-hidden';

interface InsetTextProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: string | false;
}

const InsetText: React.FC<InsetTextProps> = ({
  className,
  children,
  visuallyHiddenText,
  ...rest
}) => (
  <div className={classNames('nhsuk-inset-text', className)} {...rest}>
    {visuallyHiddenText ? <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> : null}
    {children}
  </div>
);

InsetText.defaultProps = {
  visuallyHiddenText: 'Information: ',
};

export default InsetText;
