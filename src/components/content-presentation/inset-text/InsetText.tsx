import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface InsetTextProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: string | false;
}

const InsetText: FC<InsetTextProps> = ({
  className,
  children,
  visuallyHiddenText = 'Information: ',
  ...rest
}) => (
  <div className={classNames('nhsuk-inset-text', className)} {...rest}>
    {visuallyHiddenText ? (
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
    ) : null}
    {children}
  </div>
);

export default InsetText;
